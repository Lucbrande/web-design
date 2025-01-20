"use strict"

$(document).ready(function(){
    $("#Anchor a").click( evt =>{
        const a = evt.currentTarget;

        $(a).prev().toggleClass("hidden");

        if($(a).prev().attr("class") !== "hidden"){
            $(a).text("show less");
            $(a).prev().show();
        }
        else{
            $(a).text('show more');
            $(a).prev().hide();
        }
        
        
    })
})







// const ShowMore = document.getElementById('ShowMore');
// const content = document.getElementById('Content');

// ShowMore.addEventListener('click', function(){
//     Content.classList.toggle('hidden');
// });
