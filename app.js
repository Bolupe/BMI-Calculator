//  Function for conversions
const feetInput = document.getElementById('feet')
const inchesInput = document.getElementById('inches')
 
const feet2inches = 12;
const inches2feet = 1. / feet2inches;
 
feetInput.addEventListener('input', () => {
   //if the value is empty or null
   if(!feetInput.value) {
     inchesInput.value = '';
     return;
   };
   const convertedValue = feetInput.value * feet2inches;
   inchesInput.value = Math.round(convertedValue);
 })
 
 inchesInput.addEventListener('input', () => {
   //if the value is empty or null
   if(!inchesInput.value) {
     feetInput.value = '';
     return;
   };
   const convertedValue = inchesInput.value * inches2feet;
   feetInput.value = Math.round(convertedValue);
})


function kiloweightConvert(value) {
    document.getElementById("Pounds").innerHTML=value*2.2046;
}



window.onload = () => {
    let button = document.querySelector("#btn");
  
   
    button.addEventListener("click", calculateBMI);
};




// Function for calculating BMI
function calculateBMI() {
    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    
    else {
  
      
        let bmi = 703 * (weight / (height * height)).toFixed(2);
  
       
        if (bmi < 18.6) 
            result.innerHTML =
            "Under Weight : " + bmi;

        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            "Normal : " + bmi;
  
        else result.innerHTML =
             "Over Weight : " + bmi;
    }
}
