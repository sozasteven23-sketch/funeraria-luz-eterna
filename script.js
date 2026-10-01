const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const msg=`Hola, soy ${data.get('nombre')}. Teléfono: ${data.get('telefono')}. Servicio: ${data.get('servicio')}. ${data.get('mensaje')}`;const status=form.querySelector('.form-status');status.textContent='Preparando WhatsApp…';window.open('https://wa.me/50551234567?text='+encodeURIComponent(msg),'_blank');status.textContent='Se abrió WhatsApp para enviar tu solicitud.'});
