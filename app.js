const startButton = document.querySelector("#start");
const titleMenu = document.querySelector("#titleMenu");
const gameMenu = document.querySelector("#gameMenu");
const playMenu = document.querySelector("#playMenu");

const playerScorePreview = document.querySelector("#playerScore");
const tiedScorePreview = document.querySelector("#tiedScore");
const botScorePreview = document.querySelector("#botScore");

const playRock = document.querySelector("#playRock");
const playPaper = document.querySelector("#playPaper");
const playScissors = document.querySelector("#playScissors");

const playerHandPreview = document.querySelector("#playerHand");
const botHandPreview = document.querySelector("#botHand");
const handsPreview = document.querySelector("#handsPreview");

const scoreboard = document.querySelectorAll(".scoreboard");

let playerScore = 0;
let tiedScore = 0;
let botScore = 0;

let playerHand = "R";
let botHand = "R";

startButton.addEventListener("click", () => {
    titleMenu.classList.add("hide");
    titleMenu.style.zIndex = "auto";
    setTimeout(() => {
        gameMenu.classList.remove("hide");
        playMenu.classList.remove("hide");
        setTimeout(() => {
            playMenu.style.bottom = "-26%";
        }, 1000);
    }, 1000);
})

playRock.addEventListener("click", () => {
    for (element of scoreboard) {
        element.classList.add("hide");
    }
    playerHand = "R"
    let result = play(playerHand);
    playPaper.classList.add("hide");
    playScissors.classList.add("hide");
    matchPreview();
    setTimeout(() => {
        updateScore(result);
    }, 5000);
    setTimeout(() => {
        newRound();
    }, 6000)
})

playPaper.addEventListener("click", () => {
    for (element of scoreboard) {
        element.classList.add("hide");
    }
    playerHand = "P"
    let result = play(playerHand);
    playRock.classList.add("hide");
    playScissors.classList.add("hide");
    matchPreview();
    setTimeout(() => {
        updateScore(result);
    }, 5000);
    setTimeout(() => {
        newRound();
    }, 6000)
})

playScissors.addEventListener("click", () => {
    for (element of scoreboard) {
        element.classList.add("hide");
    }
    playerHand = "S"
    let result = play(playerHand);
    playRock.classList.add("hide");
    playPaper.classList.add("hide");
    matchPreview();
    setTimeout(() => {
        updateScore(result);
    }, 5000);
    setTimeout(() => {
        newRound();
    }, 6000)
})

function newRound() {
    for (element of scoreboard) {
        element.classList.remove("hide");
    }
    playMenu.classList.remove("hide");
    playRock.classList.remove("hide");
    playPaper.classList.remove("hide");
    playScissors.classList.remove("hide");
    playerHandPreview.style.left = "-100%";
    botHandPreview.style.right = "-100%";
    handsPreview.classList.add("hide");
    setTimeout(() => {
        playMenu.style.bottom = "-26%";
        handPreview("R", "R");
    }, 1000);
}

function matchPreview() {
    setTimeout(() => {
        playMenu.style.bottom = "-100%";
        setTimeout(() => {
            playMenu.classList.add("hide");
        }, 1000)
        handsPreview.classList.remove("hide");
        playerHandPreview.style.left = "-60%";
        botHandPreview.style.right = "-60%";
        setTimeout(() => {
            playerHandPreview.style.animation = "hand-player-start 2.5s linear";
            botHandPreview.style.animation = "hand-bot-start 2.5s linear";
            setTimeout(() => {
                handPreview(playerHand, botHand);
                playerHandPreview.style.animation = "hand-player-result 0.2s linear";
                botHandPreview.style.animation = "hand-bot-result 0.2s linear";
            }, 2000)
        }, 1000);
    }, 1000);
}

function handPreview(playerHand, botHand) {
    switch (playerHand) {
        case "R":
            playerHandPreview.src = "images/rock.png";
            break;
        case "P":
            playerHandPreview.src = "images/paper.png";
            break;
        case "S":
            playerHandPreview.src = "images/scissors.png";
            break;
    }
    switch (botHand) {
        case "R":
            botHandPreview.src = "images/rock.png";
            break;
        case "P":
            botHandPreview.src = "images/paper.png";
            break;
        case "S":
            botHandPreview.src = "images/scissors.png";
            break;
    }
}

function botPlay() {
    const hands = ["R", "P", "S"]
    const rand = Math.floor(Math.random() * 3);
    return hands[rand];
}

function play(playerChoice) {
    const botChoice = botPlay();
    botHand = botChoice;
    console.log(`Player: ${playerChoice}, Bot: ${botChoice}`)
    if (playerChoice === "R") {
        if (botChoice === "R") {
            return "T";
        } else if (botChoice === "P") {
            return "L"
        } else {
            return "W"
        }
    } else if (playerChoice === "P") {
        if (botChoice === "R") {
            return "W";
        } else if (botChoice === "P") {
            return "T"
        } else {
            return "L"
        }
    } else {
        if (botChoice === "R") {
            return "L";
        } else if (botChoice === "P") {
            return "W"
        } else {
            return "T"
        }
    }
}

function updateScore(result) {
    if (result === "W") {
        playerScore++;
        playerScorePreview.innerText = playerScore;
    } else if (result === "T") {
        tiedScore++;
        tiedScorePreview.innerText = tiedScore;
    } else {
        botScore++;
        botScorePreview.innerText = botScore;
    }
}

// [url=https://ibb.co/5jrBcPD][img]https://i.ibb.co/fNk40sR/paper.png[/img][/url]
// [url=https://ibb.co/2hLbsf3][img]https://i.ibb.co/yPM3YbF/rock.png[/img][/url]
// [url=https://ibb.co/KGBcT77][img]https://i.ibb.co/RStGRPP/scissors.png[/img][/url]