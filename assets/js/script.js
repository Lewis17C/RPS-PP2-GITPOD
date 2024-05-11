const choices = ["rock", "paper", "scissors"]
let playersScore = 0;
let computersScore = 0;

 document.getElementById("button").addEventListener("onclick", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

//creates the ability for the player to slect an option
function playersChoice() {
    let playersChoice = getElementById("button");
    playersChoice.addEventListener("click", playGame());
}
//generates a random choice and assigns it to the computer
function computersChoice() {
    const computersChoice = Math.floor(Math.random() * choices.length);
    return computersChoice
}
//creates parameters which dictate the winner of the game
function playGame(playersChoice) {
    if (playersChoice === computersChoice) {
        return "Tie! Play again!"
    } else if (
        (playersChoice === "scissors" && computersChoice === "paper")
        (playersChoice === "rock" && computersChoice === "scissors")
        (playersChoice === "paper" && computersChoice === "rock")    
    ) {return "You Win!";
      playersScore++;
    } else {
    return "Computer Wins!";
    computerScore++;
} 
}
//displays the winner of the round 
function displayWinner() {
    const winner = document.getElementById("display-game-winner");
    resultElement.textContent = winner;
}

function playersScore() {
    
}

function computersScore() {

}

