const Turn = require('../src/Turn');

class Round {
  constructor(currentCard, turns) {
    this.currentCard = currentCard
    this.turns = 0
    this.incorrectGuesses = []
  }

  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    return turn
    if (turn.evaluateGuess() === false) {
    return  this.incorrectGuesses.push(this.currentCard.id);
    }
  }

  returnCurrentCard() {
    return this.currentCard
  }

  calculatePercentage() {
    console.log(this.incorrectGuesses.length / this.turns  * 100)
    console.log(this.turns)
    console.log(this.incorrectGuesses)
    return this.incorrectGuesses.length / this.turns  * 100
  }

}

module.exports = Round;
