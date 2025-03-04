document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('successMessage').style.display = 'block';
      // Real-world usage: send data to backend or Paddle subscription logic
    });
  }
});
