"use strict"

const $ = selector => document.querySelector(selector);

const processChange = () => { 
    // call to helper functions would be in here


    let cents = 0;
    cents = parseInt($("#cents").value);
    if (isNaN(cents) || cents <= 0 ||
    cents > 99){
        alert("cent must = 1-99")
    }
    else{
    const quarters = parseInt(cents / 25);
    cents = cents % 25;
    $("#quarters").value = quarters;

    const dimes = parseInt(cents / 10);
    cents = cents % 10;
    $("#dimes").value = dimes;

    const nickels = parseInt(cents / 5);
    cents = cents % 5;
    $("#nickels").value = nickels;

    const pennies = parseInt(cents / 1);
    cents = cents % 1;
    $("#pennies").value = pennies;

    }

    
   };
   

document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#calculate").addEventListener("click", processChange);
   }); 

