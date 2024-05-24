document.addEventListener("DOMContentLoaded", function() {
    let userScore = 0;
    let computerScore = 0;

    document.querySelector("#rockBtn").addEventListener("click", function() {
        playGame("Rock");
    });
    document.querySelector("#paperBtn").addEventListener("click", function() {
        playGame("Paper");
    });
    document.querySelector("#scissorBtn").addEventListener("click", function() {
        playGame("Scissors");
    });
    //     document.addEventListener("DOMContentLoaded", () => {
    //     document.querySelector("#rockBtn").addEventListener("click", () => {
    //         playGame("Rock");
    //     });
    //     document.querySelector("#paperBtn").addEventListener("click", () => {
    //         playGame("Paper");
    //     });
    //     document.querySelector("#scissorBtn").addEventListener("click", () => {
    //         playGame("Scissors");
    //     });
    // });

    function playGame(userChoice) {
        const choices = ["Rock", "Paper", "Scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        let result = `You chose ${userChoice}. Computer chose ${computerChoice}.`;

        if (userChoice === computerChoice) {
            result += " It's a tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result += " You win!";
            userScore += 1;
            if (userScore === 5) {
                document.querySelector(".winner").innerText = "Humans Win!"
            }
        } else {
            result += " You lose!";
            computerScore += 1;
            if (computerScore === 5) {
                document.querySelector(".winner").innerText = "Computers Win!"
            }
        }
        
        document.getElementById("result").innerText = result;
        document.querySelector(".score").innerText = `Humans: ${userScore}
        Computers: ${computerScore}`;
    }
});

