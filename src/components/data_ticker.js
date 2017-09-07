import React from 'react';



function DataTicker (props){

   
    const { data } = props
   
        
        return(
            <div  id ="dataticker">   
            <div id="scroll-left">{data.ticker}</div>
            </div>
        );
    }


export default DataTicker;