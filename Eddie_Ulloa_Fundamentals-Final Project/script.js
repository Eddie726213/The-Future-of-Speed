// Mobile nav toggle
document.querySelectorAll('.nav-links').forEach(nav => {
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
      });
    });
  });
  
  // Contact modal
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('thankyou-modal');
  const modalClose = document.getElementById('modal-close');
  
  if(contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response=>{
        if(response.ok){
          modal.style.display = 'flex';
          contactForm.reset();
        } else {
          alert('There was a problem sending your message.');
        }
      }).catch(()=>alert('Network error'));
    });
  }
  
  if(modalClose){
    modalClose.addEventListener('click', ()=>{
      modal.style.display = 'none';
    });
  }
  