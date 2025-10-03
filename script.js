

// Function has to return one of the three options randomly
// Math random returns a number from 0 to 1 (1 is not included)
// We could create 3 variables and assign a random value and then make a comparison between the three of them to return the computer choice


function main(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}



function getComputerChoice(){
    let rock = Math.random()
    let paper = Math.random()
    let scissors = Math.random()

    if (rock > paper & rock > scissors){
        return "rock";
    }else if(paper > rock & paper > scissors){
        return "paper";
    }
    else{
        return "scissors";
    }
}   

function getHumanChoice(){
    let h_choice = (prompt("What's your choice? ")).toLowerCase()
    return h_choice
}

function playRound(human,computer){
    let computerScore = 0
    let humanScore = 0
    if ((human == "paper" & computer == "rock") || (human == "rock" & computer == "scissors") || (human == "scissors" & computer == "paper")){
        humanScore += 1
        console.log(`You win! ${human} beats ${computer}`)
        
    }
    else if((computer == "paper" & human == "rock") || (computer == "rock" & human == "scissors") || (computer == "scissors" & human == "paper"))
       {
         computerScore += 1
         console.log(`You loose! ${computer} beats ${human}`)
    }
    else {
        console.log("Draw! no points for anyone")
    }
}

main()