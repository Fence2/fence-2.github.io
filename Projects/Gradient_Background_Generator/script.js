var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('Array is: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " + 
		color1.value + 
		", " + 
		color2.value + 
		")";

		css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
