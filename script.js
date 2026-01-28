function getComputerChoice(){
    let i = Math.floor(Math.random() * 3) + 1;
    if(i==1){
        return "rock";
    }
    else if(i==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(choice=prompt("Rock, paper or scissors?")){
    choice=choice.toLowerCase();
    if(choice=="rock"||choice=="paper"||choice=="scissors"){
        return choice;
    }
    else{console.log("You didn't follow instructions properly")}
}
let computerScore = 0;
let humanScore = 0;
function scoreReport(){
    console.log("You:" + humanScore);
    console.log("Computer:" + computerScore);
}
function playRound(computerChoice, humanChoice){
    if(humanChoice=="rock"){
        switch(computerChoice){
            case "rock": console.log("It's a tie!");
            break;
            
            case "paper": console.log("You lose! Paper beats rock");
            computerScore++;
            break;

            case "scissors": console.log("You win! Rock beats scissors");
            humanScore++;
            break;
        }
        scoreReport();
    }
    else if(humanChoice=="paper"){
        switch(computerChoice){
            case "rock": console.log("You win! Paper beats rock");
            humanScore++;
            break;

            case "paper": console.log("It's a tie!");
            break;

            case "scissors": console.log("You lose! Scissors beats paper");
            computerScore++
            break;
        }
        scoreReport();
    }
    else if(humanChoice=="scissors"){
        switch(computerChoice){
            case "rock": console.log("You lose! Rock beats scissors");
            computerScore++;
            break;

            case "paper": console.log("You win! Scissors beats paper");
            humanScore++;
            break;

            case "scissors": console.log("It's a tie!");
            break;
        }
        scoreReport();
    }
    else{console.log("Something broke");}
}
/*playRound(getComputerChoice(), getHumanChoice());*/
function playGame(){
    for(let i=1; i<=5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
}
playGame();
