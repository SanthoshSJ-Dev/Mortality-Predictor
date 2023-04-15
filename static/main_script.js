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


const treatmentSlider = document.getElementById("t_source");

treatmentSlider.addEventListener("input", () => {
  const treatmentValue = treatmentSlider.value;
  // Make an HTTP POST request to the FastAPI endpoint
  fetch('/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "treatmentValue": parseInt(treatmentValue), // Parse treatmentValue as an integer
      "operation": "predict", // Add additional form fields as required
      "sex": parseFloat(document.getElementById("sex").value),
      "highest_qualification": parseFloat(document.getElementById("highest_qualification").value),
      "rural": parseInt(document.getElementById("rural").value),
      "disability_status": parseFloat(document.getElementById("disability_status").value),
      "is_water_filter": parseFloat(document.getElementById("is_water_filter").value),
      "chew": parseFloat(document.getElementById("chew").value),
      "smoke": parseFloat(document.getElementById("smoke").value),
      "alcohol": parseFloat(document.getElementById("alcohol").value)
    })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend
    console.log(data);
  })
  .catch(error => console.error(error));
});



const backgroundSound = document.getElementById('background-sound');
const soundToggle = document.getElementById('sound-toggle');

const soundOnImage = document.getElementById('sound-on-image');
const soundOffImage = document.getElementById('sound-off-image');

soundOffImage.style.display = 'inline';

soundToggle.addEventListener('click', function() {
  if (backgroundSound.paused) {
    backgroundSound.play();
    soundOnImage.style.display = 'inline';
    soundOffImage.style.display = 'none';
  } else {
    backgroundSound.pause();
    soundOnImage.style.display = 'none';
    soundOffImage.style.display = 'inline';
  }
});
