"use Strict"

const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9; //used to calculate celsius
const calculateFahrenheit = temp => (temp * 9/5) + 32; //used to calculate fahrenheit

const toFahrenheit = () =>
{
    $("#degree_label1_1").textContent = "Enter Fahremheit";
    $("#degree_label1_2").textContent = "Degrees Celsius";
}
const toCelsius = () =>
{
    $("#degree_label1_1").textContent = "Enter Celsius";
    $("#degree_label1_2").textContent = "Degrees Fahrenheit";
}
const convertTemp = () =>
{
    
    let temp = 0.0;
    temp = $("#degrees_entered").value;
    if(isNaN(temp)){
        alert("please enter a number")
    }
    
    if($("#to_celsius").checked){
        $("#degrees_computed").value = calculateCelsius(temp);
    }
    else if ($("#to_fahrenheit").checked){
        $("#degrees_computed").value = calculateFahrenheit(temp);
    }
}




document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#Convert").addEventListener("click", convertTemp);
   }); 
