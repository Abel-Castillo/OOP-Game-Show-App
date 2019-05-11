/* Grade Goal: Exceed expectation  
Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//globaly new Game()
let newGame;
//click the start game button on overlay to start a newGame
document.querySelector("#btn__reset").addEventListener("click", () => {
  newGame = new Game();
  newGame.startGame();
});

//Click the keyboard button to pass the event to the newGame.handleInteraction(e)
const keyboardButtons = document.querySelectorAll("#qwerty button");
keyboardButtons.forEach(button =>
  button.addEventListener("click", e => newGame.handleInteraction(e))
);

// document.body.addEventListener("keydown", e => )
