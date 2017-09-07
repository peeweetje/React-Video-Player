import React, { Component } from 'react';



class EndHalf extends Component {

    easeOutCall = () => {
        const endhalf = document.getElementById("endhalf");
        endhalf.style.display = 'none';

    }

    EndHalfAnimation = () => {
        const { data } = this.props;
        const endhalf = document.getElementById("endhalf");
        endhalf.style.display = 'block';
        if(data.events){
            endhalf.innerHTML= `${data.events[3].type}`;
        }
    }

    componentDidMount() {

       setTimeout(this.EndHalfAnimation, 46000); 
       setTimeout(this.easeOutCall, 51000,);   
   }



    render(){

        return (
            <div  id="endhalf"></div>
        );
    }
}


export default EndHalf;