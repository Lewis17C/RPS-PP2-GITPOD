console.log("test test 123");

const choices = ["rock", "paper", "scissors"];
const playersChoice = document.getElementById("player-chooses");
const computersChoice = document.getElementById("computer-chooses");
const result = document.getElementById("result");

function playGame(playersChoice){
    const computersChoice = choices[Math.floor(Math.random() * 3)];
    let result = undefined;


}