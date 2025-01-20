"use strict";

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue.toFixed(2);
};
const checkIfExists = (text) => {
    //!text is "falsy/falsey coercion". 
    //If text is a number and its value is zero, it throws the error
    //https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    //https://www.educative.io/answers/what-are-falsy-values-and-truthy-in-javascript
    if(!text){
        throw new Error ("Must be a number greater than 0");
    }
     
     //must return text or the caller variable is undefined
     return text;
 };
const validateInput = () => {
    //getting values from the HTML and making sure they are numbers
    let investment = parseFloat($("#investment").val());
    let rate = parseFloat($("#rate").val());
    let years = parseFloat($("#years").val());

    let isValid = true;

    try{
        investment = checkIfExists(investment);
        if(investment < 0){
            isValid = false;
            throw new Error("No negative numbers allowed");
        }
        else{
           $("#investment").next().text(""); 
        }
        
    }
    catch(error){
        isValid = false;
        $("#investment").next().text(error.message);
    }


    try{
        rate = checkIfExists(rate);
        if(rate < 0 || rate > 15){
            isValid = false;
            throw new Error("Interest rate out of range");
        }
        else{
           $("#rate").next().text(""); 
        }
        
    }
    catch(error){
        isValid = false;
        $("#rate").next().text(error.message);
    }

    try{
        years = checkIfExists(years);
        if(years < 0 || years > 50){
            isValid = false;
            throw new Error("Years out of range");
        }
        else{
           $("#years").next().text(""); 
        }
        
    }
    catch(error){
        isValid = false;
        $("#years").next().text(error.message);
    }

    if (isValid) {
        $("#future_value").val(calculateFutureValue(investment, rate, years));
    }
}

$(document).ready( () => {

    $("#calculate").on("click", validateInput);

    $("#clear").on("click", () => {
        $("input:text").val("");
        $("input:text").next().text("*");
        $("#investment").focus();
    });

    $("input:text").on("dblclick", () => {
        $("#clear").trigger("click");
    })

    $("#investment").focus();
});