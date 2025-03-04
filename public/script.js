document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('successMessage').style.display = 'block';
      // Real code would store the email or send to backend
    });
  }
});
