import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'dist');
const files=await fs.readdir(root), issues=[],stats={pages:0,links:0,images:0,videos:0};
for(const filename of files.filter(f=>f.endsWith('.html'))){
 const html=await fs.readFile(path.join(root,filename),'utf8');stats.pages++;
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)issues.push(filename+': needs one H1');
 if(!/<html lang="en">/.test(html))issues.push(filename+': missing language');
 if(!/<meta name="viewport"/.test(html))issues.push(filename+': missing viewport');
 for(const match of html.matchAll(/<video\b([^>]*)>([\s\S]*?)<\/video>/g)){
  stats.videos++;
  const [,attributes,content]=match;
  if(!/\bcontrols\b/.test(attributes)||! /\bplaysinline\b/.test(attributes))issues.push(filename+': video needs playback controls and inline playback');
  if(/\bautoplay\b/.test(attributes)||! /\bpreload="none"/.test(attributes))issues.push(filename+': video must load only on request');
  for(const attribute of ['aria-labelledby','aria-describedby']){
   const ids=attributes.match(new RegExp(attribute+'="([^"]+)"'))?.[1]?.split(/\s+/);
   if(!ids?.length||ids.some(id=>!html.includes(`id="${id}"`)))issues.push(filename+': video has missing accessible text');
  }
  if(!/\bposter="[^"]+"/.test(attributes))issues.push(filename+': video needs a poster');
  if(!/<source\b[^>]*\btype="video\/mp4"/.test(content))issues.push(filename+': video needs an MP4 source');
 }
 for(const set of html.matchAll(/\bsrcset="([^"]+)"/g)){
  const widths=new Set();
  for(const candidate of set[1].split(',')){
   const [asset,width]=candidate.trim().split(/\s+/);
   if(widths.has(width))issues.push(filename+': duplicate responsive-image width '+width);
   widths.add(width);
   try{await fs.access(path.join(root,asset));}catch{issues.push(filename+': missing responsive image '+asset);}
  }
 }
 for(const m of html.matchAll(/<(a|img|script|link|source|video)\b[^>]*?\b(href|src|poster)="([^"]+)"[^>]*>/g)){
  const [,tag,,url]=m;
  if(tag==='a')stats.links++;if(tag==='img'){stats.images++;if(!/\balt="[^"]+"/.test(m[0]))issues.push(filename+': missing image alt');}
  if(/^(https?:|mailto:|data:)/.test(url))continue;
  const [file,fragment]=url.split('#'),target=path.resolve(root,file||filename);
  try{
   await fs.access(target);
   if(tag==='source'&&url.endsWith('.mp4')&&(await fs.stat(target)).size>=100*1024*1024)issues.push(filename+': video exceeds GitHub file-size limit');
   if(fragment){const content=await fs.readFile(target,'utf8');if(!content.includes(`id="${fragment}"`))issues.push(`${filename}: missing anchor ${url}`);}
  }catch{issues.push(`${filename}: missing asset ${url}`);}
 }
}
const css=await fs.readFile(path.join(root,'styles.css'),'utf8');
for(const m of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)){try{await fs.access(path.join(root,m[1]));}catch{issues.push('Missing stylesheet asset '+m[1]);}}
new vm.Script(await fs.readFile(path.join(root,'site.js'),'utf8'));
const flights=JSON.parse(await fs.readFile(path.join(root,'..','flights.json'),'utf8'));
if(flights.length!==6||flights.filter(f=>f.success).length!==2)issues.push('Flight record count mismatch');
if(Math.max(...flights.map(f=>f.altitude))!==6943)issues.push('Flight altitude mismatch');
console.log(JSON.stringify({stats,issues,javascript:'syntax valid'},null,2));
if(issues.length)process.exitCode=1;
