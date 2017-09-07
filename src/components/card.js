import React, { Component } from 'react';



class Card extends Component {

    easeOutCall = () => {
        const card = document.getElementById("card");
        card.style.display = 'none';

    }

    CardAnimation = () => {
        const { data } = this.props;
        const card = document.getElementById("card");
        card.style.display = 'block';
        if(data.events){
           card.innerHTML= `${data.events[1].type}: ${data.events[1].cardType} - ${data.events[1].player}`;
        }
    }

    CardAnimation1 = () => {
        const { data } = this.props;
        const card = document.getElementById("card");
        card.style.display = 'block';
        if(data.events){
           card.innerHTML= `${data.events[4].type}: ${data.events[4].cardType} - ${data.events[4].player}`;
        }
    }

    componentDidMount() {

       setTimeout(this.CardAnimation, 13000);
       setTimeout(this.easeOutCall, 18000,); 
       setTimeout(this.CardAnimation1, 52000); 
       setTimeout(this.easeOutCall, 57000,); 
   }


    render(){
  
        return (
            <div id="card"></div>
        );
    }
}

export default Card;