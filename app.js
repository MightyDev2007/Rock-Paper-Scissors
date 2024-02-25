let playerScore = 0
let computerScore = 0

function uppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice, computerChoice) {
    // Paper --> Rock
    // Rock  --> Scissors
    // Scissors --> Paper
    if (playerChoice == computerChoice) {
        return "Tie"
    } else if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper") {
        return "Win"
    } else {
        return "Loss"
    }
}

function checkScore() {
    if (playerScore >= 5) {
        console.log("Congrats! You Beat The Computer " + playerScore + " To " + computerScore + ". Refresh To Play Again")
    } else if (computerScore >= 5) {
        console.log("Sorry! You Lost To The Computer " + computerScore + " To " + playerScore + ". Refresh To Play Again")
    } else {
        console.log("Score: " + playerScore + " To " + computerScore)
        playGame()
    }
}

function playGame() {
    let playerChoice = prompt("Rock Paper or Scissors?")
    let computerChoice = getComputerChoice()
    let currentRound = playRound(playerChoice.toLowerCase(), computerChoice)

    if (currentRound === "Win") {
        console.log("You Win! " + uppercase(playerChoice) + " Beats " + uppercase(computerChoice))
        playerScore += 1
    } else if (currentRound == "Tie") {
        console.log("Tie! " + uppercase(playerChoice) + " Can't Beat " + uppercase(computerChoice))
    } else if (currentRound === "Loss") {
        console.log("You Lose! " + uppercase(computerChoice) + " Beats " + uppercase(playerChoice))
        computerScore += 1 
    }

    checkScore()
}

playGame()



