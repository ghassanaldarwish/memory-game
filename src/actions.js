import {gameStates} from './helperfunctions';

export function waitingForFirstCard (rowIndex, colIndex) {
  return {
    type: gameStates.WFTFC,
    rowIndex,
		colIndex
  }
};

export function waitingForSecondCard (rowIndex, colIndex) {
  return {
    type: gameStates.WFTSC,
    rowIndex,
		colIndex
  }
}

export function wrong (rowIndex, colIndex) {
  return {
    type: gameStates.WRONG,
    rowIndex,
		colIndex
  }
}
