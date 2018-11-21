let cards = []

//generate 8 cards
function generateCards() {
  cards = []
  for(let i=0; i < 8; i++){
    cards.push(
      {
        id: i,
        cardName: `card${i}`,
        flipped: false,
        matched: false,
        img: `assets/img/${i}.png`
      }
    )
  }
  shuffle(cards)
  return cards
}

//add 8 matching cards to 'cards' array and run a shuffle function
function shuffle(card) {
  cards.push.apply(cards, cards)
    for (let i = card.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [card[i - 1], card[j]] = [card[j], card[i - 1]];
    }
}


export default generateCards
