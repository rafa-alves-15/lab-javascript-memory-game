class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
     }


  shuffleCards(cards) {
    let currentIndex = this.cards.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex]
      ];
    }

    return cards;
  }


  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1;
     if(card1 === card2) {
      this.pairsGuessed += 1
      this.pairsClicked += 1
      return true
    }
    else {
      this.pairsClicked += 1
      return false
    }
  }

  isFinished() {
    let numpairstoWin = this.cards.length / 2;

    if (numpairstoWin > this.pairsGuessed) {
      return false;
    } else if (numpairstoWin === this.pairsGuessed) {
      return true;
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
