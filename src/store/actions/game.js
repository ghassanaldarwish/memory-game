import * as actionType from "./actionTypes";
import axios from "axios";
import generateCards from "../../game/data/generateCards";

export function onGameImgsData() {
  return {
    type: actionType.GAME_IMGS_DATA
  };
}

export function pageLoading() {
  return {
    type: actionType.PAGE_LOADING
  };
}
export const startCustomGame = userId => dispatch => {
  console.log("user id", userId);
  axios.get("https://memory-game-7.herokuapp.com/game/" + userId).then(game => {
    console.log(game.data.imgsGame);
    let cards = [];

    //generate 8 cards
    function generateCards() {
      cards = [];
      game.data.imgsGame.map(img => {
        cards.push(img);
      });
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
    console.log(generateCards());

    dispatch({
      type: actionType.START_GAME,
      payload: generateCards() || []
    });
  });
};
export function startGame(test) {
  console.log(test);
  return {
    type: actionType.START_GAME,
    payload: generateCards()
  };
}

export function showCard(card) {
  return {
    type: actionType.SHOW_CARD,
    card
  };
}

export function hideCard() {
  return {
    type: actionType.HIDE_CARD
  };
}

export function flipCard(index, cardName) {
  return {
    type: actionType.FLIP_CARD,
    index,
    cardName
  };
}

export function lockCard() {
  return {
    type: actionType.LOCK_CARD
  };
}

export function matchCard(flippedCard) {
  return {
    type: actionType.MATCH_CARD,
    flippedCard
  };
}

export function gameComplete() {
  return {
    type: actionType.COMPLETE
  };
}

export function setHighScore(score) {
  return {
    type: actionType.SET_SCORE,
    score
  };
}
