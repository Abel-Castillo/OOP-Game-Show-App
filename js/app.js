/* Grade Goal: Exceed expectation  
Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//globaly new Game()
let newGame;
//click the start game button on overlay to start a newGame
const resetGameButton = document.querySelector("#btn__reset");
resetGameButton.addEventListener("click", () => {
  newGame = new Game();
  newGame.startGame();
});

//Click the keyboard button to pass the event to the newGame.handleInteraction(e)
const keyboardButtons = document.querySelectorAll("#qwerty button");
keyboardButtons.forEach(button =>
  button.addEventListener("click", e => newGame.handleInteraction(e.target))
);

//press keyboard keys to activate on screen keyboard buttons
document.body.addEventListener("keydown", e => {
  keyboardButtons.forEach(button => {
    if (button.textContent === e.key.toLowerCase()) {
      newGame.handleInteraction(button);
    }
  });
});
