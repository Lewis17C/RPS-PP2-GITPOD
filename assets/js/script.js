const choices = ["rock", "paper", "scissors"]
let playersScore = 0;
let computersScore = 0;

function playersChoice() {
    let playersChoice = getElementById("button");
    playersChoice.addEventListener("click", playGame());
}

function computersChoice() {
    const computersChoice = Math.floor(Math.random() * choices.length);
    return computersChoice
}

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

function displayWinner() {

}

function playersScore() {
    
}

function computersScore() {

}

