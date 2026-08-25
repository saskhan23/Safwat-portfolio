// Smooth internal navigation
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// Turn portfolio screenshots into guided click-to-expand controls.
const lightbox = document.getElementById('image-lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const closeButton = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery img, .mimetic-shot img').forEach(img=>{
  if(img.closest('.expandable-trigger')) return;

  const figure = document.createElement('figure');
  figure.className = 'expandable-figure';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'expandable-trigger';
  trigger.setAttribute('aria-label', `Expand image: ${img.alt || 'project screenshot'}`);

  const hint = document.createElement('figcaption');
  hint.className = 'expand-hint';
  hint.textContent = 'Click to expand';

  const parent = img.parentNode;
  parent.insertBefore(figure, img);
  trigger.appendChild(img);
  figure.appendChild(trigger);
  figure.appendChild(hint);

  trigger.addEventListener('click', ()=>{
    if(!lightbox || !lightboxImage) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Expanded project screenshot';
    if(lightboxCaption) lightboxCaption.textContent = img.alt || '';
    if(typeof lightbox.showModal === 'function') lightbox.showModal();
  });
});

function closeLightbox(){
  if(lightbox?.open) lightbox.close();
}
closeButton?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', e=>{
  const rect = lightbox.getBoundingClientRect();
  const outside = e.clientX < rect.left || e.clientX > rect.right ||
                  e.clientY < rect.top || e.clientY > rect.bottom;
  if(outside) closeLightbox();
});
