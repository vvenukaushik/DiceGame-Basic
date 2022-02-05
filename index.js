function gamePlay() {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;

    d1 = "" + d1;
    d2 = "" + d2;

    document.querySelector(".dice .img1").src = "images/dice" + d1 + ".png";
    document.querySelector(".dice .img2").src = "images/dice" + d2 + ".png";

    if (d1 > d2) {

        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";

    } else if (d2 > d1) {

        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";

    } else {

        document.querySelector("h1").innerHTML = "Draw";
    }
}

function resetGame() {
    document.querySelector(".dice .img1").src = "images/dice6.png";
    document.querySelector(".dice .img2").src = "images/dice6.png";

    document.querySelector("h1").innerHTML = "Refresh Me";
}

document.querySelector(".btn1").onclick = gamePlay;
document.querySelector(".btn").onclick = resetGame;