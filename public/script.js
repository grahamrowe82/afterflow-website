document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('successMessage').style.display = 'block';
      // Add or integrate actual backend logic here to store email
      // console.log("Afterflow waitlist form submitted!");
    });
  }
});
