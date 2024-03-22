/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_48tod7j','template_7uxuqjc','#contact-form','NU6ekmYyCFmwa0zPL')
      .then(() => {
          // Show sent message
          const successMessage = document.createElement('div');
          successMessage.textContent = 'Message sent successfully ✅';
          successMessage.classList.add('success-message');
          contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);

          // Remove message after seven seconds
          setTimeout(() => {
              successMessage.remove();
          }, 7000);

          // Clear input fields
          contactForm.reset();

      }, () => {
          // Show error message
          contactMessage.textContent = 'Message not sent (service error) ❌';
      });
}


contactForm.addEventListener('submit', sendEmail)
