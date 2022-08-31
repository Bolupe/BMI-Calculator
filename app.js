window.onload = () => {
    let button = document.querySelector("#btn");
  
   
    button.addEventListener("click", calculateBMI);
};
 // Function for conversions
function feetConvert(value) {
    document.getElementById("height").innerHTML=value*12;

} 

function kiloweightConvert(value) {
    document.getElementById("weight").innerHTML=value*2.2046;

}  

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