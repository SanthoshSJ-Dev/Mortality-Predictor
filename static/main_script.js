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


const treatmentSlider = document.getElementById("treatment");
const treatmentValue = document.getElementById("treatmentValue");

treatmentValue.textContent = treatmentSlider.value;

treatmentSlider.addEventListener("input", () => {
  treatmentValue.textContent = treatmentSlider.value;
});


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input[type="radio"], select, input[type="range"]');
  let total = 0;

  inputs.forEach((input) => {
    if (input.checked || input.tagName === 'SELECT') {
      total += parseInt(input.value, 10);
    } else if (input.tagName === 'INPUT') {
      total += parseInt(input.value, 10) * 5;
    }
  });

  console.log(`Total value: ${total}`);
  // Send the total value to the server using fetch or XMLHttpRequest.
});
