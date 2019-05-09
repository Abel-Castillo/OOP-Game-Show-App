/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let newGame;
document.querySelector("#btn__reset").addEventListener("click", () => {
  newGame = new Game();
  newGame.startGame();
});

const keyboardButtons = document.querySelectorAll("#qwerty button");
keyboardButtons.forEach(button =>
  button.addEventListener("click", e => newGame.handleInteraction(e))
);
