const slider = document.getElementById("slider");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button = document.getElementById("check");

// month and year change
const month = document.querySelector(".month");
const month2 = document.querySelector(".month2");

// views
const views = document.querySelector(".views");

// change color of the range and change value at the same time
let slider_value = 16;

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  let views_value = Math.round((this.value / this.max) * 100);
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
    value +
    "%, #ECF0FB " +
    value +
    "%, rgba(236, 240, 251, 1))";
  number1.innerHTML = "$" + this.value + ".00";
  number2.innerHTML = "$" + this.value + ".00";
  views.innerHTML = views_value + "K";

  slider_value = this.value;
  console.log("slidermove");
};

// button eventlistener

button.addEventListener("change", (event) => {
  if (event.target.checked) {
    month.textContent = "/year";
    month2.textContent = "/year";
    slider.max = "320";
    slider.value = slider_value * 12 * 0.75;
    number1.innerHTML = "$" + slider.value + ",00";
    slider.oninput();
  } else {
    month.textContent = "/month";
    month2.textContent = "/month";
    slider.max = "32";
    slider.value = slider_value / 12 / 0.75;
    number1.innerHTML = "$" + slider.value + ",00";
    slider.oninput();
  }
});
