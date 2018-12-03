import img0 from "../../assets/img/0.png";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import img6 from "../../assets/img/6.png";
import img7 from "../../assets/img/7.png";
let cards = [];
const imges = [img0, img1, img2, img3, img4, img5, img6, img7];

//generate 8 cards
function generateCards() {
  cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push({
      id: i,
      cardName: `card${i}`,
      flipped: false,
      matched: false,
      img: imges[i]
    });
  }
  shuffle(cards);
  return cards;
}

//add 8 matching cards to 'cards' array and run a shuffle function
function shuffle(card) {
  cards.push.apply(cards, cards);
  for (let i = card.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [card[i - 1], card[j]] = [card[j], card[i - 1]];
  }
}

export default generateCards;
