"use strict"

const $ = selector => document.querySelector(selector);
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
const phone = $("#Phone").value.trim().replace(/\D/g, '');
 
const selectedRadio = (input_name) =>{
    const input = $(`[name=${input_name}]:checked`);
    return input.id;
};

const showdates = () =>{

    const today = new Date();
    const T = today.toISOString().indexOf('T')
    
    let minDate = new Date();
    let day = today.getDate() - 30;
  

        $("#ArrivalDate").value = today.toISOString().substring(0, T);
        $("#ArrivalDate").max = today.toISOString().substring(0, T);
        $("#ArrivalDate").min = minDate.toISOString(minDate.setDate(day)).split('T').shift();

}
const checkIfExists = (text, name) => 
{
    if(!text){
        switch(name){
            case "ArrivalDate":
                throw new Error ("Date Is Needed");
            case "Nights":
                throw new Error ("Nights Requiered");
            case "Name":
                throw new Error ("Name Requiered");
            case "E-Mail":
                throw new Error ("Email Requiered");
            case "Phone":
                throw new Error ("Phone Requiered");


        }
    }

    return text;
}
