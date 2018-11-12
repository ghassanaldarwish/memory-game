import React from 'react';
// import ReactDOM from 'react-dom';
import '../styles/index.css';

import pacci from'../pacci_01.png';
import image_1 from'../images/baby.png';
import image_2 from'../images/blue_moon.png';
import image_3 from'../images/bubble.png';
import image_4 from'../images/car.png';
import image_5 from'../images/champion.png';
import image_6 from'../images/cow.png';
import image_7 from'../images/dolphin.png';
import image_8 from'../images/dwarf.png';
import image_9 from'../images/giraf.png';
import image_10 from'../images/snail.png';
import image_11 from'../images/squirrel.png';
import image_12 from'../images/star.png';
import image_13 from'../images/trees.png';


class Card extends React.Component{
  render(){

    let cardsArr = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12, image_13];

    return <div className="card">{this.props.card.flipped ?
      <img className="backside" src={cardsArr[this.props.card.cardValue -1]} alt="hoho"/> :
       <img className="backside" src={pacci} alt="hoho"/>}
     </div>
  }
}


export default Card
