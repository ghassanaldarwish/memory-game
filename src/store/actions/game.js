import * as actionType from "./actionTypes";

export function pageLoading() {
 return{
   type: actionType.PAGE_LOADING
 }
}
export function startGame() {
 return{
   type: actionType.START_GAME
 }
}

export function showCard(card) {
 return{
   type: actionType.SHOW_CARD,
   card
 }
}

export function hideCard() {
 return{
   type: actionType.HIDE_CARD,
 }
}

export function flipCard(index, cardName) {
 return{
   type: actionType.FLIP_CARD,
   index,
   cardName
 }
}

export function lockCard() {
 return{
   type: actionType.LOCK_CARD,
 }
}

export function matchCard(flippedCard) {
 return{
   type: actionType.MATCH_CARD,
   flippedCard
 }
}

export function gameComplete() {
 return{
   type: actionType.COMPLETE,
 }
}

export function setHighScore(score) {
 return{
   type: actionType.SET_SCORE,
   score
 }
}
