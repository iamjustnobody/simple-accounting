import React from 'react';

export const TotalCosts =(props) => {
    const {timescale1,allbills3}=props;
    const totalcounted=allbills3.reduce(
        (arr,each) => {
            return each.counted?(arr+Number.parseFloat(each.monthlycost)):arr;
        },0
    );
    const totaluncounted=allbills3.reduce(
        ((arr,each) => each.counted?(arr+Number.parseFloat(each.monthlycost)):arr),0
    );
    const moneytransform=(totals)=>{
        switch(timescale1) {
            case "monthly":
                return totals;
            case "daily":
                return totals * 3.0 / 13;
            case "yearly":
                return totals * 12;
        }
    }
    return (
        <div>
              <div className='bill-total-container'>
                  {timescale1} total expense:
                  <span className='total-cost'> {moneytransform(totalcounted).toFixed(2)} </span>
              </div>
            <div className='total-saved-container'>
                {timescale1} total savings:
                <span className='total-saved'>{moneytransform(totaluncounted).toFixed(2)}</span>
            </div>
        </div>
    )
}
//<div>total expense: {totalcounted}</div>              <div>total savings: {totaluncounted}</div>