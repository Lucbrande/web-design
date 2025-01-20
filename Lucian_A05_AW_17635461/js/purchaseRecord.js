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
  

        $("#purchase_date").value = today.toISOString().substring(0, T);
        $("#purchase_date").max = today.toISOString().substring(0, T);
        $("#purchase_date").min = minDate.toISOString(minDate.setDate(day)).split('T').shift();

}
    const checkIfExists = (text, name) => 
    {
        if(!text){
            switch(name){
                case "E-Mail":
                    throw new Error ("Email Requiered");
                case "Date":
                    throw new Error ("Date Is Needed");
                case "PurchaseAmount":
                    throw new Error ("Amount Required");

            }
        }

        return text;
    }


    const reset = () =>
    {
        calculate();
        showdates();
        $("#E-Mail").value = "";
        $("#E-Mail").nextElementSibling.textContent = "*";
         $("#purchase_date").nextElementSibling.textContent = "*";
        $("#PurchaseAmount").value = "";
        $("#PurchaseAmount").nextElementSibling.textContent = "*";
        $("#DisPrice").value = "";

        

    }

    const calculate = () =>
    {


        
        let amount = parseFloat($("#PurchaseAmount").value);
        let discount_percent = 0.0;
        let selecedValue = $("#discount_type").value;
        let isvalid = true;
        let email = $("#E-Mail").value;
        let date = $("#purchase_date").value;
        try{
        amount = checkIfExists(amount, "PurchaseAmount")
        
        }
        catch(error)
        {
            $("#PurchaseAmount").nextElementSibling.textContent = error.message
            isvalid = false;
            // console.log(amount)
            // console.log(error.message)
        } 

        try 
        {
    
                email = checkIfExists(email, "E-Mail")
                
    
            //E-Mail
        }
        catch(error)
        {
            $("#E-Mail").nextElementSibling.textContent = error.message;
            isvalid = false;
        }
        try
        {
            let date = $("#purchase_date").value;
            date = checkIfExists(date, "purchase_date")
            $("#purchase_date").nextElementSibling.textContent = "Date Is Needed";
        }
        catch(error)
        {
                $("#purchase_date").nextElementSibling.textContent = error.message;
                isvalid = false
        }

        // this is where i ended up stoping on the assighnment^^^^^^^^^^^ i could not
        //figure out how to get the date try catch to work.
       
        if(isvalid == true){
            
            switch(selecedValue)
            {
                case "student":
                case "military":
                    discount_percent = .10;
                break;
                case "aarp":
                    discount_percent = .15;
                break;
                default:
                    discount_percent = 0;
            }
        let discount_price = (discount_percent > 0)? amount - (amount * discount_percent):amount


        $("#DisPrice").value = discount_price;

        }


       

        
    }
    //amount = what end user said
    //


    document.addEventListener("DOMContentLoaded", () => {
        showdates();
        $("#Reset").addEventListener("click", reset)
        $("#Info").addEventListener("click", calculate)
    });

