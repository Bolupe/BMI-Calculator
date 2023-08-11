//  Function for conversion from  feet to inches

const feetInput = document.getElementById('feet')
const inchesInput = document.getElementById('inches')
 
const feet2inches = 12;
const inches2feet = 1. / feet2inches;
 
feetInput.addEventListener('input', () => {
   if(!feetInput.value) {
     inchesInput.value = '';
     return;
   };
   const convertedValue = feetInput.value * feet2inches;
   inchesInput.value = Math.round(convertedValue);
 })
 
 inchesInput.addEventListener('input', () => {
   if(!inchesInput.value) {
     feetInput.value = '';
     return;
   };
   const convertedValue = inchesInput.value * inches2feet;
   feetInput.value = Math.round(convertedValue);
})

//BMI Calculation
window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
    let height = parseInt(document
            .querySelector("#inches").value);
    let weightOld = parseInt(document
            .querySelector("#weight").value);
    let weight = weightOld*2.2046;
    let result = document.querySelector("#result");
  
    // Catching error
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the BMI
    else {
        let bmi = 703 * (weight / (height * height)).toFixed(2);
        if (bmi < 18.6) result.innerHTML = "Under Weight : " + bmi + " lbs/(in)2";
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = "Normal : " + bmi + " lbs/(in)2";
        else result.innerHTML = "Over Weight : " + bmi + " lbs/(in)2";
    }
}
