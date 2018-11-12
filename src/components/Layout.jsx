import React from 'react';
import Card from './card';
import '../styles/index.css';

import { connect } from "react-redux";
import {waitingForFirstCard, waitingForSecondCard, wrong} from '../actions';

import {gameStates} from '../helperfunctions';


class Layout extends React.Component{
    cardClick(card){

      if(!card.flipped){
        switch(this.props.gameStatus){
          case gameStates.WFTFC:
            //call the action WFTFC
            this.props.flipFirst(card.rowIndex, card.colIndex)

            break;
          case gameStates.WFTSC:
          //call next Action WFTSC
            this.props.flipSecond(card.rowIndex, card.colIndex)
            break;
          case gameStates.WRONG:
        //call action WRONG
            this.props.flipAgain(card.rowIndex, card.colIndex)
            break;
          default:
            return;
          }

      }

    }

    render() {

      const cardsRendered = this.props.cards.map((rowOfCards, idx)=>
      <tr key={idx} >
        {rowOfCards.map((card)=>
          <td key={`${card.rowIndex}x${card.colIndex}`} onClick={() => this.cardClick(card)}><Card card = {card}  />
        </td>)}
      </tr>)

      return <div className="game">
        <p>{this.props.gameStatus}</p>
        <table><tbody>{cardsRendered}</tbody></table>
      </div>
    }
  }


export default connect(state => ({
  cards:state.cards,
  gameStatus: state.gameStatus
}), {
  flipFirst: waitingForFirstCard,
  flipSecond: waitingForSecondCard,
  flipAgain: wrong

})(Layout);
