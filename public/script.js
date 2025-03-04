document.getElementById('waitlistForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById('successMessage').style.display='block';
    // Add backend logic here for actual email storage
});
