

const chewSlider = document.getElementById("chew");
const chewValue = document.getElementById("chewValue");

chewValue.textContent = chewSlider.value;

chewSlider.addEventListener("input", () => {
  chewValue.textContent = chewSlider.value;
});


const smokeSlider = document.getElementById("smoke");
const smokeValue = document.getElementById("smokeValue");

smokeValue.textContent = smokeSlider.value;

smokeSlider.addEventListener("input", () => {
  smokeValue.textContent = smokeSlider.value;
});


const alcoholSlider = document.getElementById("alcohol");
const alcoholValue = document.getElementById("alcoholValue");

alcoholValue.textContent = alcoholSlider.value;

alcoholSlider.addEventListener("input", () => {
  alcoholValue.textContent = alcoholSlider.value;
});


const treatmentSlider = document.getElementById("treatment_source");
const treatmentValue = document.getElementById("treatmentValue");

treatmentValue.textContent = treatmentSlider.value;

treatmentSlider.addEventListener("input", () => {
  treatmentValue.textContent = treatmentSlider.value;
});


// const backgroundSound = document.getElementById('background-sound');
// const soundToggle = document.getElementById('sound-toggle');

// const soundOnImage = document.getElementById('sound-on-image');
// const soundOffImage = document.getElementById('sound-off-image');

// soundOffImage.style.display = 'inline';

// soundToggle.addEventListener('click', function() {
//   if (backgroundSound.paused) {
//     backgroundSound.play();
//     soundOnImage.style.display = 'inline';
//     soundOffImage.style.display = 'none';
//   } else {
//     backgroundSound.pause();
//     soundOnImage.style.display = 'none';
//     soundOffImage.style.display = 'inline';
//   }
// });


