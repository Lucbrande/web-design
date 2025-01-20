"use strict"

$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 700 > -4900) {
            newLeftProperty = leftProperty - 700;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 500);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 700;
        }
        else{
            newLeftProperty = -4200
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 500);
    });

});