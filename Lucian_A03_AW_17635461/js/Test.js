"use Strict"

const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"]; 
const scores = [88, 98, 77, 88]; 

const createElementWithText = (tagName, text) =>{

    const element = document.createElement(tagName);
    const textNode = document.createTextNode(text);

    element.appendChild(textNode);

    return element;
}


const array = () =>
{
let myName = $("#name").value
let myScore = $("#score").value
let isValid = true

if(myName == "" || isNaN(myScore)==true){
    isValid = false;
}
else {
    names[names.length] = myName;
    scores[scores.length] = parseFloat(myScore)
}
$("#name").value="";
$("#score").value="";

}

const results = () =>
{
let scoreTotal = 0;
let highScore = 0;
let highScoreName = 0;
let averageScore = 0;
const div = $("#showResults");
    for ( let i in scores ){
         scoreTotal += scores[i];
            if (scores[i] > highScore) {
                 highScore = scores[i];
                 highScoreName = names[i];
  }//end if
}//end for
averageScore = scoreTotal / scores.length;
    const headerNode = createElementWithText("h2","Results")
    const avgScore = createElementWithText("p", `Average score = ${averageScore}`);
    const highScoreElement = createElementWithText("p",`High score = ${highScoreName} with a score of ${highScore}`)
    

    
    if(div.querySelector("h2") == undefined){
            div.appendChild(headerNode);
            div.appendChild(avgScore);
            div.appendChild(highScoreElement)
    }
    else{
        div.replaceChild(headerNode, div.firstChild);
        div.replaceChild(avgScore, div.firstChild.nextElementSibling);
        div.replaceChild(highScoreElement, div.lastChild);
        
    }
}

const disScores = () =>
{
    const div = $("#showScores");
    div.textContent = "";

    div.appendChild(createElementWithText("h2", "Scores"));


    
    for(let i in scores){
        div.appendChild(createElementWithText("label", names[i]));
        div.appendChild(createElementWithText("label", scores[i]));
        div.appendChild(document.createElement("br"))
    }
}


document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#array").addEventListener("click", array);
    $("#results").addEventListener("click", results);
    $("#disScores").addEventListener("click", disScores);
    
   });