// import React from 'react';
import {shuffleArray, createArray} from './helperfunctions';

//
import {gameStates} from './helperfunctions';

function createInitialState (width, height){

	    if(width*height%2===1){
	      alert('Odd number of cards')
	    }
	    let cards = createArray(height, width);
console.log(cards)
	    let numbers =[];
	    for (let oneDIndex = 0; oneDIndex< height * width; oneDIndex++){
	      numbers.push(Math.floor(oneDIndex/2)+1);
	    }
	    shuffleArray(numbers)

	      for (let rowIndex = 0; rowIndex < height; rowIndex++){
	        for(let colIndex = 0; colIndex < width; colIndex++)
	        {
	          cards[rowIndex][colIndex] = {
	            cardValue:  numbers[rowIndex*width+colIndex],
	            flipped: false,
	            rowIndex: rowIndex,
	            colIndex:colIndex}

	        }}

	return  {
	      cards: cards,
	      gameStatus: gameStates.WFTFC,
	      firstCard: null,
	      secondCard: null
	    };
}

export default createInitialState(2, 3);
