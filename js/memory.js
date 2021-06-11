class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * i);
      const aux = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = aux;
    }
  }

  checkIfPair(card1, card2) {
    this.pickedCards = [];
    this.pairsClicked++;
    if (card1.name === card2.name) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
