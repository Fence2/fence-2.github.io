var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createrListElement() {
	var li = document.createElement("li");
	li.textContent = input.value;
	// OR
	// li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createrListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createrListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
 

// var button = document.getElementById("button1");
// button.addEventListener("click", function() {
// 	console.log("ХЕЙ");
// });