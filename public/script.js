document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple success message display
      document.getElementById('successMessage').style.display = 'block';
      // In real-world use, you'd call an API here to store the email
    });
  }
});
