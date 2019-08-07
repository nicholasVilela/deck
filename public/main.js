class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}
const cardSuit = document.querySelector('#card-suit')
const cardRank = document.querySelector('#card-rank')
const shuffleBtn = document.querySelector('#shuffle')
// const 

const card1 = new Card('Ace', 'Hearts')

const ranks = ['Ace','1','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const suits = ['♥','♦','♠','♣']
const suitColors = {
  '♥' : 'red',
  '♦' : 'red',
  '♠' : 'black',
  '♣' : 'black'
}
const deck = []

const displayInitialDeck = () => {  
  // Failed attempts

  // suits.forEach(suit => {
  //   ranks.forEach(rank => {
  //     deck.push(new Card(ranks[rank], suits[suit]))
  //   })
  // })
  // suits.map(suit => ranks.map(rank => deck.push(new Card(ranks[rank], suits(suit))))

  // Dreaded for loop
  for(let s = 0; s < suits.length; s++) {
    for(let r = 0; r < ranks.length; r++) {
      deck.push(new Card(ranks[r], suits[s]))
    }
  }
  cardSuit.textContent = deck[0].suit
  cardRank.textContent = deck[0].rank
  console.log(deck[0])
}

const shuffle = () => {
  // let remaining = deck.length, t , i

  // while (remaining) {
  //   let i = Math.floor(Math.random() * remaining--)

  //   t = deck[remaining]
  //   deck[remaining] = deck[i]
  //   deck[i] = t
  // }

  let randomCard = deck[Math.floor(Math.random() * deck.length)]
  let firstCard = deck[0]
  firstCard = randomCard
  cardSuit.textContent = firstCard.suit
  cardRank.textContent = firstCard.rank
  console.log(firstCard)
}