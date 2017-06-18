

//target
let content = document.getElementById("content");
let button = document.getElementById("submitBtn");
let outputDiv= document.getElementById("output");

//turn button into block level element
document.getElementById("submitBtn").style.display = "block";

var testString = "";

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.  The output of each of the functions should immediately appear as well.
button.addEventListener("click", function(){
	if (isNaN(content.value) && content.value !== ""){
		// The text input should only accept letters. No numbers.
 		testString= content.value;
 		console.log ("testString",testString);
 		reversal(testString);
		alphabits(testString);
		palindrome(testString);

	}else if(content.value === ""){
		alert("Please enter your text in the box.");

	}else{
			alert("Please enter letters only.");
	}
});


//event listener on keyup for enter inside the text input

content.addEventListener("keyup", function(event){
	if(event.key === "Enter"){
		if (isNaN(content.value) && content.value !== ""){
 		testString= content.value;
 		console.log ("testString",testString);
 		reversal(testString);
		alphabits(testString);
		palindrome(testString);

		}else if(content.value === ""){
		alert("Please enter your text in the box.");

		}else{
			alert("Please enter letters only.");
		}
	}
});


//will pass testString in
function reversal(string) {
let splitArray = string.split("");
// split turns string into an array of characters
let reverseArray=splitArray.reverse();
// reverse reverses order of array of characters
let reverseString= reverseArray.join("");
//join puts the array back into a string
outputDiv.innerHTML= reverseString;
}
// reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

function alphabits() {

}
// return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

function palindrome() {

}
//determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.


