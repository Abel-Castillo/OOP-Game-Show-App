/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const divPhrase = document.querySelector("#phrase ul");
    // divPhrase.id = "phrase";
    // divPhrase.className = "section";
    const word = this.phrase
      .split("")
      .map(letter =>
        letter === " "
          ? `<li class="space"> </li>`
          : `<li class="hide letter ${letter}">${letter}</li>`
      );
    divPhrase.innerHTML = `${word.join("")}`;
  }
  checkLetter(e) {
    const guess = e.target.innerHTML;
    const correctGuess = this.phrase.split("").find(word => {
      if (word === guess) {
        this.showMatchedLetter(word);
        e.target.className = "chosen";
        return true;
      }
    });
    return correctGuess;
  }
  showMatchedLetter(word) {
    const matchLetter = document.querySelectorAll(`.${word}`);
    matchLetter.forEach(letter => (letter.className = "show"));
  }
}
