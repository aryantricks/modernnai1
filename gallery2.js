document.addEventListener("DOMContentLoaded", () => {
    const bigImage = document.getElementById('bigImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
  
        bigImage.style.opacity = 0; // Hide the big image during transition
  
        // Delay the big image change to sync with the thumbnail transition
        setTimeout(() => {
          bigImage.src = thumbnail.src;
          bigImage.style.opacity = 1; // Reveal the big image with opacity transition
        }, 300); // Match the thumbnail transition duration
      });
    });
  });
  