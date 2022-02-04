const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')

describe('Round', () => {

  let round;
  card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
  card2 = new Card(2, 'What is 2 + 2 ?', ['2', '3', '4'], '4');
  card3 = new Card(1, 'What is 4 + 4 ?', ['2', '8', '4'], '8');
  card4 = new Card(2, 'What is 8 + 8 ?', ['16', '3', '4'], '16');

  beforeEach(() => {

    round = new Round(card, 0);
    cards = [card, card2, card3, card4]
    deck = new Deck(cards)
    });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should be able to take a turn', () => {
    round.takeTurn('2')
    expect(round.turns).to.equal(1)
  })

  it('should instantiate a new instance of Turn', () => {
    round.takeTurn('2')
    expect(round.takeTurn()).to.be.an.instanceOf(Turn)
  })

  it('should be able to return the current card', () => {
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(card)
    round = new Round(card2, 0);
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.deep.equal(card2)
  })

  it('should calculate percentage of wins', () => {
    round.takeTurn('2')
    incorrectGuess()
    expect(round.calculatePercentage()).to.equal(100)
    round.takeTurn('3')
    expect(round.calculatePercentage()).to.equal(50)
  })
})
