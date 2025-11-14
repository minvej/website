
// ~0.5 KB nav toggle
const btn=document.querySelector('#menu');const nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.getElementById('year').textContent=new Date().getFullYear();
