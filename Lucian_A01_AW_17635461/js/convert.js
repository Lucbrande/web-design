"use strict"

let inches = 0;
let cm = -1

do{
    inches = parseInt(prompt("Enter a length that can be converted into cm", 999));

if(inches == 999){
    cm = -1;
    
}
else if(inches >= 0)
cm = inches * 2.54;
else{
    alert("please enter the right number")
    cm = -1;
}
if(cm != -1){
    const html =  `<p>${inches} = ${cm} </p>`;
    document.write(html);
}



}while(inches !=999)



