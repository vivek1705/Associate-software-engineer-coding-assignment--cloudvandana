// Select all images in the slider
const images = document.querySelectorAll('.slider img');

// Select the navigation buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Function to display the image 
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

// Event listener for the "Prev" button
prevBtn.addEventListener('click', () => {
  
  // If at the first image, loop back to the last image
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  
  // If at the last image, loop back to the first image
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});
