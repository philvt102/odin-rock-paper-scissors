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
/*function getHumanChoice(choice=prompt("Rock, paper or scissors?")){
    choice=choice.toLowerCase();
    if(choice=="rock"||choice=="paper"||choice=="scissors"){
        return choice;
    }
    else{console.log("You didn't follow instructions properly")}
}*/

let computerScore = 0;
let humanScore = 0;
let results = document.querySelector("#results");
let thisResult = document.createElement("p");
thisResult.setAttribute('style', 'white-space: pre;');

function scoreReport(){
    let currentScore = "";
    if(humanScore==5){
        let currentScore=
        `You: ${humanScore}\nComputer: ${computerScore}\nYou Won The Game!`;
        return currentScore;
    }
    else if(computerScore==5){
        let currentScore = 
        `You: ${humanScore}\nComputer: ${computerScore}\nYou Lost The Game!`;
        return currentScore;
    }
    else{
        let currentScore = 
        `You: ${humanScore}\nComputer: ${computerScore}`;
        return currentScore;
    }

    
}



function playRound(computerChoice, humanChoice){
    
    if(humanChoice=="rock"){
        switch(computerChoice){
            case "rock": thisResult.textContent = "It's a tie!\n" + scoreReport();
            break;
            
            case "paper": ++computerScore;
            thisResult.textContent = "You lose! Paper beats rock\n" + scoreReport();
            
            break;

            case "scissors": ++humanScore;
            thisResult.textContent = "You win! Rock beats scissors\n" + scoreReport();
            
            break;
        }
        results.appendChild(thisResult);
    }
    else if(humanChoice=="paper"){
        switch(computerChoice){
            case "rock": ++humanScore;
            thisResult.textContent = "You win! Paper beats rock!\n" + scoreReport();
            
            break;

            case "paper": thisResult.textContent = "It's a tie!\n" + scoreReport();
            break;

            case "scissors": ++computerScore;
            thisResult.textContent = "You lose! Scissors beats paper\n" + scoreReport();
            
            break;
        }
        results.appendChild(thisResult);
    }
    else if(humanChoice=="scissors"){
        switch(computerChoice){
            case "rock": ++computerScore;
            thisResult.textContent = "You lose! Rock beats scissors\n" + scoreReport();
            
            break;

            case "paper":  ++humanScore;
            thisResult.textContent = "You win! Scissors beats paper\n" + scoreReport();
           
            break;

            case "scissors": thisResult.textContent = "It's a tie!\n" + scoreReport();
            break;
        }
        results.appendChild(thisResult);
    }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {playRound(getComputerChoice(),"rock")});
paper.addEventListener("click", () => {playRound(getComputerChoice(),"paper")});
scissors.addEventListener("click", () => {playRound(getComputerChoice(),"scissors")});


