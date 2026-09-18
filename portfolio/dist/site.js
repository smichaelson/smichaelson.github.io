const header=document.querySelector('.site-header'),menu=document.querySelector('.menu-toggle');
function closeMenu(){header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));header.classList.toggle('menu-open',open);});
document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&header.classList.contains('menu-open')){closeMenu();menu.focus();}});
// Enlarging is an optional reading aid; every image remains within its story.
const viewer=document.querySelector('.image-viewer');
document.querySelectorAll('[data-enlarge]').forEach(link=>link.addEventListener('click',event=>{
 if(!viewer?.showModal||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
 event.preventDefault();const source=link.querySelector('img');
 viewer.querySelector('img').src=link.href;viewer.querySelector('img').alt=source.alt;
 const turned=link.hasAttribute('data-turn'),ratio=Number(source.getAttribute('width'))/Number(source.getAttribute('height'));
 viewer.querySelector('.viewer-stage').classList.toggle('rotated',turned);
 viewer.querySelector('.viewer-stage').style.setProperty('--image-ratio',String(turned?1/ratio:ratio));
 viewer.querySelector('.viewer-caption').textContent=source.alt;viewer.querySelector('.viewer-original').href=link.href;
 viewer.showModal();document.body.style.overflow='hidden';
}));
viewer?.addEventListener('close',()=>{document.body.style.overflow='';});
viewer?.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const controls=[...viewer.querySelectorAll('button,a[href]')],first=controls[0],last=controls.at(-1);
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
viewer?.addEventListener('click',event=>{if(event.target!==viewer)return;const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();});
const chapterLinks=[...document.querySelectorAll('.chapter-nav nav a')];
if(chapterLinks.length&&'IntersectionObserver'in window){
 const observer=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting);if(!visible.length)return;const id=visible[0].target.id;chapterLinks.forEach(a=>a.hash==='#'+id?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current'));},{rootMargin:'-8% 0px -68% 0px'});
 document.querySelectorAll('.story-section').forEach(s=>observer.observe(s));
}
