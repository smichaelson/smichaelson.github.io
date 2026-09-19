import http from 'node:http';
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf','.woff2':'font/woff2','.ttf':'font/ttf','.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'};
http.createServer(async (req,res)=>{
  try {
    let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname.endsWith('/')) pathname+='index.html';
    const full=path.resolve(root,'.'+pathname);
    if(!full.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
    if(path.extname(full)==='.mp4'){
      const {size}=await fs.stat(full);
      const headers={'Content-Type':'video/mp4','Accept-Ranges':'bytes','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'};
      let start=0,end=size-1,status=200;
      if(req.headers.range){
        const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if(!range||(!range[1]&&!range[2])){res.writeHead(416,{...headers,'Content-Range':`bytes */${size}`});res.end();return;}
        if(range[1]){start=Number(range[1]);if(range[2])end=Math.min(Number(range[2]),size-1);}
        else{start=Math.max(0,size-Number(range[2]));}
        if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>=size||start>end){res.writeHead(416,{...headers,'Content-Range':`bytes */${size}`});res.end();return;}
        status=206;headers['Content-Range']=`bytes ${start}-${end}/${size}`;
      }
      headers['Content-Length']=end-start+1;
      res.writeHead(status,headers);
      if(req.method==='HEAD'){res.end();return;}
      const stream=createReadStream(full,{start,end});
      stream.on('error',()=>res.destroy());
      res.on('close',()=>stream.destroy());
      stream.pipe(res);return;
    }
    const data=await fs.readFile(full);
    res.writeHead(200,{'Content-Type':types[path.extname(full)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Page not found. Return to the portfolio home.');}
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio ready at http://localhost:${port}`));
