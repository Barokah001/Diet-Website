$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav-lists").toggleClass("showing");
    $("nav-lists ul").toggleClass("showing");
  });
});

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let SignUp = document.getElementById("SignUp");

signinBtn.onclick = function () {
  namefield.style.maxHeight = "0";
  SignUp.innerHTML = "Sign In";
  signupBtn.classList.add("sign-in");
  signinBtn.classList.remove("sign-in");
};

signupBtn.onclick = function () {
  namefield.style.maxHeight = "60px";
  SignUp.innerHTML = "Sign Up";
  signupBtn.classList.remove("sign-in");
  signinBtn.classList.add("sign-in");
};

// Health Metric Calculations
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    // Get user input
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value / 100; // Convert to meters
    const weight = document.getElementById("weight").value;
    const waist = document.getElementById("waist").value;
    const hip = document.getElementById("hip").value;

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Calculate Waist-to-Hip Ratio
    const whRatio = (waist / hip).toFixed(2);

    // Display Results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>BMI: <strong>${bmi}</strong></p>
        <p>Waist-to-Hip Ratio: <strong>${whRatio}</strong></p>
      `;
  });
  console.log(bmi);
  console.log(whRatio);
