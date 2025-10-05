// EmailJS Contact Form Handler
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the submit button
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML =
      '<span class="flex items-center justify-center gap-3">Sending... ⏳</span>';
    submitBtn.disabled = true;

    emailjs.sendForm('service_3juij9k', 'template_979tidk', this).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);

        // Success state
        submitBtn.innerHTML =
          '<span class="flex items-center justify-center gap-3">Message Sent! ✅</span>';
        submitBtn.classList.add('bg-green-600');

        // Clear form
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-green-600');
        }, 3000);
      },
      (error) => {
        console.log('FAILED...', error);

        // Error state
        submitBtn.innerHTML =
          '<span class="flex items-center justify-center gap-3">Failed to Send ❌</span>';
        submitBtn.classList.add('bg-red-600');

        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-red-600');
        }, 3000);
      }
    );
  });
}
