 function getComputerChoice(){
let a =  Math.floor(Math.random() * 3);
    if  (a == 0) { return "rock"} else if  (a == 1) {return "paper"}
    else { return"scissors"};
}

let  humanScore = 0;
let computerScore = 0;

const result = document.getElementById("result")
const  yourScore = document.getElementById("yourscore")
const compScore = document.getElementById("computerscore")


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

  if (humanChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (beats[humanChoice] === computerChoice) {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  yourScore.textContent = "Your Score: " + humanScore;
  compScore.textContent = "Computer Score: " + computerScore;
}


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const head = document.getElementById("heading")
const  btn = document.getElementById("btn")


function handleClick(choice) {
  if (humanScore === 5 || computerScore === 5) return  ; 
  playRound(choice, getComputerChoice());
head.style.display = "none"
btn.style.display=""
 result.style.display=""

  if (humanScore === 5) {
    result.textContent = "You won the game!";
  } else if (computerScore === 5) {
    result.textContent = "The computer won the game!";
  }
  if (humanScore === 5 || computerScore === 5){btn.style.display="flex"
}
}

function restartGame(){ 
   humanScore = 0;
 computerScore = 0;
 result.style.display="none"
  yourScore.textContent =  "Your Score: " + humanScore;
compScore.textContent = "Computer Score: " + computerScore;
head.style.display = "";
btn.style.display=""

}
rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissors.addEventListener("click", () => handleClick("scissors"));
btn.addEventListener("click", () => restartGame())
