function randomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

var playerOneNumber = randomNumber();
var playerTwoNumber = randomNumber();

document.querySelector('.img1').setAttribute('src', `./images/dice${playerOneNumber}.png`);
document.querySelector('.img2').setAttribute('src', `./images/dice${playerTwoNumber}.png`);

if (playerOneNumber > playerTwoNumber) {
    document.querySelector('h1').textContent = 'Player One Wins!'
}
else if (playerOneNumber == playerTwoNumber) {
    document.querySelector('h1').textContent = 'You Tied! Roll Again!'
}
else {
    document.querySelector('h1').textContent = 'Player Two Wins!'
}