// Your code here
// Select the dodger element
const dodger = document.getElementById('dodger');

// Function to move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Prevent dodger from moving off the left edge
    dodger.style.left = `${left - 10}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Prevent dodger from moving off the right edge (assuming 400px wide container)
    dodger.style.left = `${left + 10}px`;
  }
}

// Event listeners for key presses
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
