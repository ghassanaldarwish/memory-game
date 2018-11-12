import initialState from './initialState';
import {cloneDeep} from 'lodash/lang';

import {gameStates} from './helperfunctions';

const Reducer = (state = initialState, action) => {

	if(!Object.values(gameStates).includes(action.type)) return state;
	const newCards = cloneDeep(state.cards);
	// console.log(newCards)
	const card = newCards[action.rowIndex][action.colIndex];

	switch (action.type){

		case gameStates.WFTFC:
			card.flipped = true;

			return {
				...state,
				cards: newCards,
				firstCard: card,
				gameStatus: gameStates.WFTSC
			};
		case gameStates.WFTSC:

			card.flipped = true;
			if(state.firstCard.cardValue === card.cardValue){
				return {
					...state,
					gameStatus: gameStates.WFTFC,
					cards: newCards,
					secondCard: card
				};
			} else {
				return {
					//WRONG is also an action
					...state,
					gameStatus: gameStates.WRONG,
					cards: newCards,
					secondCard: card
				};
			}
		case gameStates.WRONG:
				newCards[state.firstCard.rowIndex][state.firstCard.colIndex].flipped=false;
				newCards[state.secondCard.rowIndex][state.secondCard.colIndex].flipped=false;
				newCards[action.rowIndex][action.colIndex].flipped = true;
				return {
					...state,
					gameStatus: gameStates.WFTSC,
					cards: newCards,
					firstCard: card
				};
		default:
			return state;
	}
};
export default Reducer;
