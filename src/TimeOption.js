import React from 'react';
import './timeOption.css';

export const TimeOption =(props) => {

    const {switchtimescale1,settimescale1,timeScale1}=props;
    const switchtimescale=(e)=>{  //or switchtimescale1(e)
        settimescale1(e.target.innerText);
   //     console.log(e.target.innerText);
    }
    return (
        <div className='interval-option-container'>
            <div className={timeScale1 === 'Daily' ? 'selected-interval' : 'interval'}
                 onClick={switchtimescale1}>daily</div>
            <div className={timeScale1 === 'Monthly' ? 'selected-interval' : 'interval'}
                 onClick={switchtimescale}>monthly</div>
            <div className={timeScale1 === 'Yearly' ? 'selected-interval' : 'interval'}
                 onClick={switchtimescale1}>yearly</div>
        </div>
    )
}