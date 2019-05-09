/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let newPhrase;
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      {
        phrase: "It is not rocket science"
      },
      {
        phrase: "You can lead a horse to water but you can not make it drink"
      },
      {
        phrase: "Elephant in the room"
      },
      {
        phrase: "Give a man a fish and you will feed him for a day"
      },
      {
        phrase: "Jump the gun"
      }
    ];
    this.activePhrase = null;
  }
  startGame() {
    this.resetGame();
    document.querySelector("#overlay").style.display = "none";
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    newPhrase = new Phrase(this.activePhrase);
    newPhrase.addPhraseToDisplay();
  }
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber].phrase;
  }
  handleInteraction(e) {
    // console.log(e.target);
    const checkLetter = newPhrase.checkLetter(e);
    // console.log(newPhrase.checkLetter(e.target.innerText));
    e.target.setAttribute("disabled", "disabled");
    if (!checkLetter) {
      e.target.className = "wrong";
      this.removeLife();
    }
    if (checkLetter) {
      this.checkForWin();
    }
  }
  removeLife() {
    const hearts = document.querySelectorAll(".tries img");
    console.log(
      hearts[this.missed].setAttribute("src", "images/lostHeart.png")
    );
    console.log(this.missed);
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver("lose", `Sorry, better luck next time!`);
    }
  }
  checkForWin() {
    const liShow = document.querySelectorAll(".show");
    console.log(liShow.length);
    const phraseLength = newPhrase.phrase.split(" ").join("").length;
    if (liShow.length === phraseLength) {
      this.gameOver("win", "You win!");
    }
  }
  gameOver(result, message) {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "";
    const overlayH1 = document.querySelector("#game-over-message");
    overlayH1.textContent = `${message}`;
    overlay.className = `${result}`;
  }
  resetGame() {
    const enableKeyboard = document.querySelectorAll("#qwerty button");
    enableKeyboard.forEach(button => {
      button.removeAttribute("disabled");
      button.className = "key";
    });
    this.missed = 0;
    this.activePhrase = null;
    const hearts = document.querySelectorAll(".tries img");
    hearts.forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
  }
}

// const ready = new Game();
// ready.startGame();
