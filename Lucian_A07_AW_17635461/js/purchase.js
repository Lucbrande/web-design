"use strict"
// $(document).ready(() => {
     
        $("#datePicker").datepicker({minDate: -20, maxDate: "+1M +10D"});

    
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;


// const showdates = () =>{

//     const today = new Date();
//     const T = today.toISOString().indexOf('T')
    
//     let minDate = new Date();
//     let day = today.getDate() - 30;
  




// }
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
        
    
        $("#E-Mail").val("");
        $("#E-Mail").next().text("*");
         $("#datePicker").next().text("*");
        $("#PurchaseAmount").val("");
        $("#PurchaseAmount").next().text("*");
        $("#DisPrice").val("");
        $("textarea").val("");

        

    }
    $("#Reset").on("click", reset);

    const calculate = () =>
    {


        
        let amount = parseFloat($("#PurchaseAmount").val());
        let discount_percent = 0.0;
        let selecedValue = $("#discount_type").val();
        let isvalid = true;
        let email = $("#E-Mail").val();
        let date = $("#purchase_date").val();
        try{
        amount = checkIfExists(amount, "PurchaseAmount")
        
        }
        catch(error)
        {
            $("#PurchaseAmount").next().text(error.message)
            isvalid = false;
        } 

        try 
        {
    
                email = checkIfExists(email, "E-Mail")
                
    
            //E-Mail
        }
        catch(error)
        {
            $("#E-Mail").next().text(error.message);
            isvalid = false;
        }
        try
        {
            let date = $("#datePicker").val();
            date = checkIfExists(date, "datePicker")
            
        }
        catch(error)
        {
                $("#datePicker").next().textContent(error.message);
 
                isvalid = false
        }

       
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
        $("textarea").append(discount_price);

        $("#DisPrice").val(discount_price);
        
        }
    }
        $(document).ready(() => {
        $("#Info").on("click", calculate);
       



        
    
});
