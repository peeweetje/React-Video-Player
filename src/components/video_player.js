import React, { Component } from 'react';





class VideoPlayer extends Component {

 
    


    render() {
   
        return(
            <div >
            <video id="video"  
            src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov" 
            controls
            autoPlay
            >
            </video> 
         
            <div id="time" ></div>
          </div>   
        );
    }
}


export default VideoPlayer;

