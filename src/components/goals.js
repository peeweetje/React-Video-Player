import React, { Component } from 'react';



class Goals extends Component {

    easeOutCall = () => {
        const goals = document.getElementById("goals");
        goals.style.display = 'none';

    }

    goalAnimation = () => {
        const { data } = this.props;
        const goals = document.getElementById("goals");
        goals.style.display = 'block';
        if(data.events){
            goals.innerHTML= `${data.events[0].type}: ${data.events[0].player},
                               Distance of Shot: ${data.events[0].distanceOfShot},
                               Home:${data.events[0].newScore.home}
                               Away:${data.events[0].newScore.away}`;
        }
    
    }



    goalAnimation1 = () => {
        const { data } = this.props;
        const goals = document.getElementById("goals");
        goals.style.display = 'block';
        if(data.events){
            goals.innerHTML= `${data.events[2].type}: ${data.events[2].player},
                              Distance of Shot: ${data.events[2].distanceOfShot},
                              Home:${data.events[2].newScore.home} 
                              Away:${data.events[2].newScore.away}`;
        }
    }

    goalAnimation2 = () => {
        const { data } = this.props;
        const goals = document.getElementById("goals");
        goals.style.display = 'block';
        if(data.events){
            goals.innerHTML= `${data.events[5].type}: ${data.events[5].player},
                                Distance of Shot: ${data.events[5].distanceOfShot},
                                Home:${data.events[5].newScore.home}
                                Away:${data.events[5].newScore.away}`;
        }
    }


    componentDidMount() {
        
        setTimeout(this.goalAnimation, 5000);
        setTimeout(this.easeOutCall, 10000,);
        setTimeout(this.goalAnimation1, 30000);
        setTimeout(this.easeOutCall, 35000,); 
        setTimeout(this.goalAnimation2, 75000);      
        setTimeout(this.easeOutCall, 80000,); 
       }
       
    

   
    render() {

        return (
            <div id="goals">
             
            </div>
        );
    }
}

export default Goals;