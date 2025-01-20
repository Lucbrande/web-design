"use strict"

let letterGrade = "";
let grade = 0;

do{

    grade = parseInt(prompt("Enter a Grade", 999));

    if(grade<70){
        letterGrade = "F";
    }
    else if(grade <=77){
        letterGrade = "D";
    }
    else if(grade <=84){
        letterGrade = "C";
    }
    else if(grade <=92){
        letterGrade = "B";
    }
    else if(grade <=100){
        letterGrade = "A";
    }
   else{
            if(grade != 999)
                alert("yay")
            letterGrade ="";
        }
if(letterGrade !=""){
const html =  `<p>grade ${grade} = ${letterGrade} </p>`;

document.write(html);
}
}while(grade !=999)
document.write("Your Grades have been printed");
