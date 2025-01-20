"use stricts";

//alert("hello");
let total = 0;

const miles = parseInt(prompt("Enter Miles", 999));
const gallons = parseInt(prompt("Enter Gallons", 999));

const mpg = parseFloat(miles/gallons);

const html = `<p>${mpg.toFixed(2)} miles per gallon</p>`

document.write(html);

//alert(miles + " miles were driven");
//alert(gallons + " gallons where used");
