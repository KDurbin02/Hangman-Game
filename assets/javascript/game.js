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
var wins = 1;
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
        picture: "assets/images/canteven.jpg"
    },
    {
        name: "Flannel",
        picture: "assets/images/flannel.jpg"
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
    currentWordArr = currentWord.toLowerCase();

    console.log(currentWord);

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
    checkLetters();


});

function checkLetters() {

    var current = document.getElementById("current_word").innerHTML.split('');

    if (currentWordArr.includes(userGuess) && guesses.indexOf(userGuess) < 0) {
        guesses.push(userGuess);
        //if letter guessed is correct

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
        //if letter guessed is wrong
        guesses.push(userGuess);
        guessesLeft--;
        var alreadyGuessed = document.getElementById("already_guessed");
        alreadyGuessed.innerHTML = guesses.join(" ");
        var left = document.getElementById("guesses_left");
        left.innerHTML = guessesLeft;


    }
    if (current.indexOf("_") < 0) {
        //if player wins
        alert("Yas Queen!")
        document.getElementById("picture").src = options[optionNumber]["picture"];
        //document.getElementById("previous") = options[optionNumber]["name"];
        var win = document.getElementById("wins");
        win.innerHTML = wins;
        wins++; //wins counter goes up
        reset(); //reset game
        begin(); //begin again

    };
    if (guessesLeft === 0) {
        //if player losses
        alert("I just can't")
        document.getElementById("picture").src = options[optionNumber]["picture"];
       // document.getElementById("previous") = options[optionNumber]["name"];
       // var snd = new Audio("file.wav"); // buffers automatically when created
       // snd.play();
        reset(); //reset game
        begin(); //begin again

    }
};





function reset() {
    guesses = [];
    guessesLeft = 7;
    userGuess = "";
    answer;
    optionNumber;
    options = [{
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
            picture: "assets/images/canteven.jpg"
        },
        {
            name: "Flannel",
            picture: "assets/images/flannel.jpg"
        }
    ];
    hidden = [];
    currentWord;
    currentWordArr;

}


begin();