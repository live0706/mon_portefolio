// Comportement JS minimal : année dans le footer, smooth scroll et gestion du formulaire
document.addEventListener('DOMContentLoaded', ()=>{
  // année
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // simple contact form handler (no backend) — juste une confirmation côté client
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      const feedback = form.querySelector('.form-feedback');

      if(!name || !email || !message){
        if(feedback) feedback.textContent = 'Veuillez remplir tous les champs.';
        return;
      }

      // Ici vous pouvez appeler une API pour envoyer le message.
      form.reset();
      if(feedback) feedback.textContent = 'Merci — votre message a été envoyé (simulation).';
    });
  }
});