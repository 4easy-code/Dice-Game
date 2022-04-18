function reloadPage() {
    var rndm1 = Math.floor(Math.random(0, 6) * 6) + 1;
    var rndm2 = Math.floor(Math.random(0, 6) * 6) + 1;

    var player1Dice = "images/dice" + rndm1 + ".png";
    var player2Dice = "images/dice" + rndm2 + ".png";

    document.querySelector(".img1").setAttribute("src", player1Dice);
    document.querySelector(".img2").setAttribute("src", player2Dice);

    if (rndm1 > rndm2) {
        document.querySelector("h1").textContent = "Player 1 wins 🚩";
    } else if (rndm1 < rndm2) {
        document.querySelector("h1").textContent = "Player 2 wins 🚩";
    } else {
        document.querySelector("h1").textContent = "It's a tie ❌";
    }
}