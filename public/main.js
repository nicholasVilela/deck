const cardRank = document.querySelector('#card-rank')
const cardSuit = document.querySelectorAll('#card-suit')
const cardProp = document.querySelectorAll('[name="card-prop"]')

const deck = []
const ranks = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
const suits = ['♥','♦','♠','♣']
const suitColors = {
  '♥' : 'red',
  '♦' : 'red',
  '♠' : 'black',
  '♣' : 'black'
}


class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.color = suitColors[this.suit];
  }
}

const handleColorChange = (card) => {
  if (card.color == 'red') {
    cardProp.forEach(prop => {
      if (prop.classList.contains('black')) {
        prop.classList.remove('black')
      }
      prop.classList.add('red')
    })
  }
  else {
    cardProp.forEach(prop => {
      if (prop.classList.contains('red')) {
        prop.classList.remove('red')
      }
      prop.classList.add('black')
    })
  }
}


const shuffle = () => {
  // Creating deck
  ranks.forEach(rank => {
    suits.forEach(suit => {
      deck.push(new Card(rank, suit))
    })
  })

  let randomCard = deck[Math.floor(Math.random() * deck.length)]

  handleColorChange(randomCard)

  cardSuit.forEach(suit => suit.textContent = randomCard.suit)
  cardRank.textContent = randomCard.rank
}