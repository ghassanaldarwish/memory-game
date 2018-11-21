import React, {Component} from 'react'
import { Card } from '../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions';
import '../css/GameBoard.css'

class GameBoard extends Component {


    componentDidUpdate(){
      //show cards on random when start/reset button clicked

      if(this.props.show){
        let indexArray = [...Array(this.props.cards.length).keys()]
        for(let i = 0; i < this.props.cards.length; i++){
          let randomNumber = Math.floor(Math.random() * indexArray.length)
          let selected = indexArray.splice(randomNumber, 1)
          setTimeout(()=>{
              this.props.showCard(selected)
          }, 100 + i*130)
        }
        setTimeout(()=>{
          this.props.hideCard()
        }, 4000)
      }

      //put flipped cards into an array and pass them to reducers
      let flippedCard = []
      if(this.props.gameOn){
        flippedCard = this.props.cards.filter ((card) => {
          return card.flipped === true && card.matched === false
        })
      }

      if(flippedCard.length === 2){
        this.props.lockCard()
        if(this.props.isLocked) {
          setTimeout(()=>{
            this.props.matchCard(flippedCard)
            flippedCard=[]
          }, 500)
        }
      }

      let complete = this.props.cards.filter ((card) => {
        return card.flipped === true && card.matched === true
      })

      if(complete.length === this.props.cards.length){
        this.props.gameComplete()
        setTimeout(()=>{
          this.props.startGame()
        }, 2600)
      }

    }
    handleImageLoaded = () => {
        this.props.pageLoading()
    }


    render() {

      let cardsList=[]
      let initialCards = []

      //initial card background
      for(let i=0; i < 16; i++){
        initialCards.push(<div key={i} className="initialCardsWrapper" ><img className="backgroundImg" onLoad={this.handleImageLoaded.bind(this)} src="assets/img/back.jpg" alt="backgroudImg" /></div>)
      }

      //generate cards
      let cards = this.props.cards


      cards = cards.map((card, i) => {
        return (
                <div className={card.flipped? "card_active" : "card"} key={i}>
                  <Card
                  index={i}
                  card={card}
                  isLocked={this.props.isLocked}
                  flipCard={this.props.flipCard}
                  lockCard={this.props.lockCard}
                  matchCard={this.props.matchCard}
                  />
                </div>
            )
      })

      //If this.props.isStarting === true, show generated cards
      cardsList = this.props.isStarting? cards : initialCards

      let gameBoardComplete = this.props.isCompleted? "gameBoard_complete" : "gameBoard"

        return (
            <div className={gameBoardComplete}>
              <div className="cardsWrapper">
                {cardsList}
              </div>
              <div className="gameBoardBack"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    isLocked: state.game.isLocked,
    gameOn: state.game.gameOn,
    show: state.game.show,
    isCompleted: state.game.isCompleted
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
