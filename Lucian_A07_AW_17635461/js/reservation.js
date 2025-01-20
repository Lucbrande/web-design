"use strict"



$("#datePicker").datepicker({minDate: -20, maxDate: "+1M +10D"});

const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;


const checkIfExists = (text, name) => 
{
    if(!text){
        switch(name){
            case "E-Mail":
                throw new Error ("Required");
            case "datePicker":
                throw new Error ("Required");
            case "Nights":
                throw new Error ("Required");
            case "Name":
                throw new Error ("Required");
            case "Phone":
                throw new Error ("Required");


        }
    }

    return text;
}
const calculate = () =>
    {
        let nights = $("#Nights").val();
        let name = $("#Name").val();

        let isvalid = true;
        let email = $("#E-Mail").val();
        let phone = $("#Phone").val();
        try{
            nights = checkIfExists(amount, "Nights")
        
        }
        catch(error)
        {
            $("#Nights").nextElementSibling.textContent = error.message
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
            let date = $("#datePicker").val();
            date = checkIfExists(date, "datePicker")
            
        }
        catch(error)
        {
                $("#datePicker").next().textContent(error.message);
 
                isvalid = false
        }


       

        
    }
    

    $(document).ready( () => {
        $("#tabs").tabs();
        $("#submit").on("click", calculate);
        $(function() {
            $("#dialog").dialog({
                autoOpen: false,
                modal: true,
                buttons: {
                    "Ok": function() {
                        $(this).dialog("close");
                    }
                }
            });
        
            $("#open-dialog").on("click", function() {
                $("#dialog").dialog("open");
            });
        });
        });


