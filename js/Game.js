//global new Phrase to be used anywhere in the Game class
let newPhrase;

class Game {
  constructor() {
    //keep track of lives
    this.missed = 0;
    //create 5 phrases
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
    //the currect active phrase
    this.activePhrase = null;
  }
  startGame() {
    //reset game for every new game
    this.resetGame();
    //remove the overlay screen when start button is clicked inside app.js
    document.querySelector("#overlay").style.display = "none";
    //get a random phrase to start the game
    const phrase = this.getRandomPhrase();
    //pass on the phrase into the currently active phrase
    this.activePhrase = phrase;
    //pass the random phrase into the Phrase class
    newPhrase = new Phrase(this.activePhrase);
    //run the addPhraseToDisplay() inside the newPhrase to create the <li>'s inside the <ul>
    newPhrase.addPhraseToDisplay();
  }
  getRandomPhrase() {
    //randomly pick a phrase
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber].phrase;
  }
  handleInteraction(letter) {
    //pass the event from letter clicked inside app.js
    const checkLetter = newPhrase.checkLetter(letter);
    //Once a letter has picked disabled it to prevent the click handler
    letter.setAttribute("disabled", "disabled");
    //if the return value from newPhrase.checkLetter(e) is false give the target a class of 'wrong' and remove a life
    if (!checkLetter) {
      letter.className = "wrong";
      this.removeLife();
    }
    //if the return value of newPhrase.checkLetter(e) is true check for win
    if (checkLetter) {
      this.checkForWin();
    }
  }
  removeLife() {
    //add 1 to the missed counter
    this.missed += 1;
    //select all the heart images
    const hearts = document.querySelectorAll(".tries img");
    //Get the lenght from heart images and subtract from the missed counter
    const MaxHearts = hearts.length - this.missed;
    //Select heart to add the listHeart.png
    hearts[MaxHearts].setAttribute("src", "images/lostHeart.png");
    //if missed counter reaches 5 call gameOver()
    if (this.missed === 5) {
      this.gameOver("lose", `Sorry, better luck next time!`);
    }
  }

  checkForWin() {
    //Check for all the <li> with the class of 'show'
    const liShow = document.querySelectorAll(".show");
    //remove the empty spaces from phrase and count the letters
    const phraseLength = newPhrase.phrase.split(" ").join("").length;
    //if the letter count in the phrase is equal to the amount if <li>'s with the class of 'show' call gameOver with a win
    if (liShow.length === phraseLength) {
      this.gameOver("win", "You win!");
    }
  }
  gameOver(result, message) {
    //If gameOver show the overlay
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "";
    //Give the <h1> a message for win or lose
    const overlayH1 = document.querySelector("#game-over-message");
    overlayH1.textContent = `${message}`;
    //give the class of win or lose
    overlay.className = `${result}`;
  }
  resetGame() {
    //enable all keyboard buttons and give the class of 'key' to every button
    const enableKeyboard = document.querySelectorAll("#qwerty button");
    enableKeyboard.forEach(button => {
      button.removeAttribute("disabled");
      button.className = "key";
    });
    //reset the missed counter
    this.missed = 0;
    //remove the current phrase
    this.activePhrase = null;
    //reset liveHeart images
    const hearts = document.querySelectorAll(".tries img");
    hearts.forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
  }
}
