//create new answer
//press a letter to guess
//if letter is in answer it registers in current word
//if word guess completes alert you win
//if letter is incorrect it registers in letters already guessed
//if letter is incorrect number of guesses left decreases by one
//alert you lose if number of guesses = 0
//restart game with previous answer and matching picture

//name, picture 

var guesses = [];
var guessesLeft = 7;
var userGuess = "";
var answer;
var optionNumber;
var options = [{
        name: "Pumpkin Spice Latte",
        picture: "assets/images/psl.jpg"
    },
    {
        name: "Basic",
        picture: "assets/images/basic.jpg"
    },
    {
        name: "Hoodies",
        picture: "assets/images/hoodies.jpg"
    },
    {
        name: "Boots",
        picture: "assets/images/boots.jpg"
    },
    {
        name: "Pumpkins",
        picture: "assets/images/pumpkins.jpg"
    },
    {
        name: "Cant Even",
        picture: ""
    },
    {
        name: "Flannel",
        picture: ""
    }
];
var hidden = [];
var currentWord;
var currentWordArr;

function begin() {
    //computer picks word to play
    optionNumber = Math.floor((Math.random() * 7));
    currentWord = options[optionNumber]["name"];
    currentWordArr = currentWord.split("");
    console.log(currentWord)

    //creates play spaces for word
    for (var i = 0; i < currentWordArr.length; i++) {
        if (currentWordArr[i] === ' ') {
            hidden.push(" ");
        } else {
            hidden.push("_");
        }
    };

    var hiddenHTML = document.getElementById("current_word");
    hiddenHTML.innerHTML = hidden.join("");
};
//registers user guess
window.addEventListener('keydown', function(event) {
    console.log(event);
    userGuess = event['key'];
    // event.push(userGuess.toLowerCase());
    checkLetters();


});

function checkLetters() {
    
    var current = document.getElementById("current_word").innerHTML.split('');

    if (currentWordArr.includes(userGuess) && guesses.indexOf(userGuess) < 0) {
        console.log("letterfound");
        guesses.push(userGuess);


        for (var i = 0; i < currentWordArr.length; i++) {
            if (currentWordArr[i] === userGuess) {
                current[i] = currentWordArr[i];
                var currentHTML = document.getElementById("current_word");
                currentHTML.innerHTML = current.join("");

            }
        }
        var alreadyGuessed = document.getElementById("already_guessed");
        alreadyGuessed.innerHTML = guesses.join(" ");
    } else {
        guesses.push(userGuess);
        guessesLeft--;
        var alreadyGuessed = document.getElementById("already_guessed");
        alreadyGuessed.innerHTML = guesses.join(" ");
        var left = document.getElementById("guesses_left");
        left.innerHTML = guessesLeft;
        console.log(guessesLeft);

    }
    if (current.indexOf("_") < 0){
     document.getElementById("picture").src = options[optionNumber]["picture"];

    }

};


begin();








/*window.onload = function () {


 
}
*/