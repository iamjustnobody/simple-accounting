import React from 'react';

export const DisplayABill =(props) => {
const {eachbill,allbills2b}=props;


    return (
        <div>

            <div>{eachbill.item} costs {eachbill.monthlycost}</div>
        </div>
    )
}
//<input type="checkbox" value={eachbill.counted} onClick={()=>{handlexxx(eachbill)}}></input>