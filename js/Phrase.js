class Phrase {
  constructor(phrase) {
    //Receives a phrase parameter and converts it to lower case letters.
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    //Select the <ul> to append the <li>'s
    const divPhrase = document.querySelector("#phrase ul");
    //Get the phrase and split each letter into individial <li>'s
    const word = this.phrase
      .split("")
      .map(letter =>
        letter === " "
          ? `<li class="space"> </li>`
          : `<li class="hide letter ${letter}">${letter}</li>`
      );
    //combine all <li> inside the array into a single string and append to <ul>
    divPhrase.innerHTML = `${word.join("")}`;
  }
  checkLetter(letter) {
    //Passed event from letter click handle inside app.js -> handleInteraction inside Game.js

    //get the letter from the target
    const guess = letter.textContent;
    //search if guess is found inside this.phrase if found run showMatchedLetter() and return true
    const correctGuess = this.phrase.split("").find(word => {
      if (word === guess) {
        this.showMatchedLetter(word);
        letter.className = "chosen";
        return true;
      }
    });
    return correctGuess;
  }
  showMatchedLetter(word) {
    //if match found select the class by the letter's and add the class of 'show'
    const matchLetter = document.querySelectorAll(`.${word}`);
    matchLetter.forEach(letter => (letter.className = "show"));
  }
}
