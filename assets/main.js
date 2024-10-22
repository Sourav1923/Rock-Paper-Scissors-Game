let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};


const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win ! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText = `You lose !  ${compChoice} beats your ${userchoice} `;;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) => {
    console.log("User Choice=", userchoice);

    const compChoice = genCompChoice();
    console.log("Comp choice", compChoice);

    if (userchoice === compChoice) {
        // Draw game
        msg.style.backgroundColor = "blue"
        msg.innerText = "Draw! Play Again"
    }
    else {
        let userWin = true;

        if (userchoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice == "paper") {
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})