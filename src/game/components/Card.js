import React, { Component } from "react";
import "../css/Card.css";
import backgroudImgCard from "../../assets/back.jpg";

class Card extends Component {
  handleClickFlipCard() {
    if (!this.props.isLocked) {
      this.props.flipCard(this.props.index, this.props.card.cardName);
    }
  }

  render() {
    let cardFrontStyle = {
      backgroundImage: `url(${backgroudImgCard})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    let cardMatched = this.props.card.matched ? "cardBack_matched" : "cardBack";

    return (
      <div onClick={this.handleClickFlipCard.bind(this)}>
        <div className="cardFront" style={cardFrontStyle}>
          <span className="gameNameOn">?</span>
        </div>
        <img
          className={cardMatched}
          src={this.props.card.img}
          alt={this.props.cardName}
        />
      </div>
    );
  }
}

export default Card;
