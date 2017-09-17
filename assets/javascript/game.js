//press any key to begin
//create new answer
//press a letter to guess
//if letter is in answer it registers in current word
//if letter is incorrect it registers in letters already guessed
//number of guesses left decreases by one
//restart game after number of guesses is zero


var guesses = [];
var answer;
var options = ["Pumpkin Spice Latte", "Basic White Girl", "Hoodies", "Boots", "Pumpkins", "Cant Even"];
var hidden = [];
var currentWord;
var currentWordArr;

function begin() {

    document.addEventListener("keydown", function(event) {

        guesses.push(event.key.toLowerCase())
        console.log(event);

    })

    currentWord = options[Math.floor((Math.random() * 6))];
    currentWordArr = currentWord.split("");
    console.log(currentWord)

    //var current = document.createElement("div");
    //var textnode = document.createTextNode("_ ");


    for (var i = 0; i < currentWordArr.length; i++) {
        if (currentWordArr[i] === ' ') {
            hidden.push(" ");
        } else {
            hidden.push("_");
        } 
        

    };
    var hiddenHTML = document.getElementById("current_word");
    console.log(hidden);
    // console.log(hidden.join(""));
    hiddenHTML.innerHTML = hidden.join("");

    guesses.onkeydown = function(){
    if (guesses === currentWordArr) {
    	string.replace("_", guesses);
    	console.log(guesses)
    }	


    };









};
begin();








/*window.onload = function () {





	var previous = "answer";

	//Computer picks random word to guess
	function getItem() {
  	//Possible words to guess
  	var currentword = ["Pumpkin Spice Latte", "Basic White Girl", "Hoodies", "Boots", "Pumpkins"];
  	document.getElementByClass("current_word").innerHTML = words[Math.floor(Math.random() * words.length)];

  	//Displays possible words blank spaces
  	var possibleWord = "P U M P K I N  S P I C E  L A T T E";
  	var blankSpaces = "";
  	var wordLength = possibleWord.length;

  	for (i = 0; i < wordLength; i++) {
    	var x = possibleWord.charAt(i);

    	if (x === " " || x === "/'") {
     	 blankSpaces += x;
    	} else {
      	blankSpaces += "_";


    }
  }
  document.getElementById("blankSpaces").innerHTML = blankSpaces;

 
}
*/