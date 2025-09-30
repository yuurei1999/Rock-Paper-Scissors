

// Function has to return one of the three options randomly
// Math random returns a number from 0 to 1 (1 is not included)
// We could create 3 variables and assign a random value and then make a comparison between the three of them to return the computer choice

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
    let humanChoice = prompt("What's your choice? ")
    return humanChoice
}

let computerScore = 0
let humanScore = 0

alert(computerScore)