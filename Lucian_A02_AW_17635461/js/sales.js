"use strict"

const $ = selector => document.querySelector(selector);

const processSales = () => { 
  
const subTotal = parseFloat($("#subTotal").value);

const taxRate = parseFloat($("#taxRate").value);//this is the reciver
//console.log(subTotal);
//console.log(taxRate);

  if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000){
    alert("subTotal <= 0 or <= 10000");
  }
  else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12){
    alert("taxRate <= 0 or <= 12");
  }
  else{
    let salesTax = subTotal * (taxRate / 100);

    $("#salesTax").value = salesTax;
   //this is the giver
    $("#total").value = subTotal + salesTax;
    //Do that math

    //variables inside the elements
  }
  
  
    // call to helper functions would be in here

   };
   

document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#calculate").addEventListener("click", processSales);
   }); 

