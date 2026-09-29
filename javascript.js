function getComputerChoice(){
let a =  Math.floor(Math.random() * 3);
    if  (a == 0) { return "rock"} else if  (a == 1) {return "paper"}
    else { return"scissors"};
}
function getHumanChoice(){

return prompt("Your Turn", " ");

}
let  humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice ){
if (humanChoice.toLowerCase() ==="rock" && computerChoice =="paper"  ){console.log("You lose! Paper beats Rock")}
    else if (humanChoice.toLowerCase() === "paper" && computerChoice =="rock" ){console.log("You win! Paper beats Rock" )} 
    else if (humanChoice.toLowerCase()  === "scissors" && computerChoice  =="paper"  ){console.log("You win! Paper beats Rock" ) } 
      else   if (humanChoice.toLowerCase() === "rock" && computerChoice =="scissors"){console.log("You win! rock  beats scissors" )} 
      else   if (humanChoice.toLowerCase()  === "paper" && computerChoice =="scissors" ){console.log("You lose! scissors beats paper")} 
      else     if (humanChoice.toLowerCase()  === "scissors"&& computerChoice =="rock" ){console.log("You lose! rock beats scissors")} 
      else if (humanChoice.toLowerCase() ==="rock" && computerChoice =="rock"  ){console.log("its tie")}
      else if (humanChoice.toLowerCase() ==="paper" && computerChoice =="paper"  ){console.log("its tie")}
      else if (humanChoice.toLowerCase() ==="scissors" && computerChoice =="scissors"  ){console.log("its tie")}
       else  {console.log("wrong input")}
       if (humanChoice.toLowerCase() ==="rock" && computerChoice =="paper"  ){return computerScore++}
    else if (humanChoice.toLowerCase() === "paper" && computerChoice =="rock" ){return humanScore++} 
    else if (humanChoice.toLowerCase()  === "scissors" && computerChoice  =="paper"  ){return humanScore++ } 
      else   if (humanChoice.toLowerCase() === "rock" && computerChoice =="scissors"){return humanScore++ } 
      else   if (humanChoice.toLowerCase()  === "paper" && computerChoice =="scissors" ){return computerScore++} 
      else     if (humanChoice.toLowerCase()  === "scissors"&& computerChoice =="rock" ){return computerScore++}       

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame(){
playRound(getHumanChoice(),getComputerChoice())
 playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  
if (humanScore > computerScore){console.log("You Are The Winner!")}
else if (humanScore < computerScore){console.log("You are The Loooseer!")}
else  {console.log("Its Tie Tie")}
}

playGame()
console.log("Your Score is :" +" "+ humanScore)
console.log("computer Score is :"+" "+ computerScore)



