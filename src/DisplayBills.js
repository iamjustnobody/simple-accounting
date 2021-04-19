import React from 'react';
import {DisplayABill} from "./DisplayABill";
import './displayBillList.css'

export const DisplayBills =(props) => {
    const {allbills2}=props;
    const  {handlecountedA1}=props;
    const  {setspecificbillcounted1}=props;

    const handleCounted1 =(ele)=>{
        allbills2.map(
            eachbill => {
                if(eachbill.item===ele.item){
                //    console.log(eachbill.item,eachbill.counted);
                //    setspecificbillcounted1(!eachbill.counted);
                    //should setBill not just setBillCounted but both bill and bill.counted are temperary parameters while tying; after tying becomes '';
                    //only allBills last long - defined in app.js or all states js
                    // temperary parameters like bill counted monthlyCost defined in child component like addonenewbill.js
                 //   return {...eachbill,counted:!eachbill.counted,};
                    //should setstate of long lasting allBills as handleCounted1 should run/be executed when onclick
                    //should not just display (like return <html>
                }
                return eachbill;
            }
        );
    }
    //neither onClick={()=>{handleCounted1(bill)}} nor onClick={()=>{handlecountedA1(bill)}} are correct

    const {addanotherbill2, setallbills2}=props;
    const handleCounted2 =(ele)=>{
        setallbills2(allbills2.map(
            eachbill => {
                if(eachbill.item === ele.item){
                    return {...eachbill,counted:!eachbill.counted,};
                }
                else
                    return eachbill;
            }
        ));
    }

    const {handlecountedB1}=props;
//both onClick={()=>{handlecountedB1(bill)}} and onClick={()=>{handleCounted2(bill)}} are ok

    const handleCounted3 =(ele)=>{
        const billsleft=allbills2.filter(eachbill => eachbill.item!==ele.item);
        setallbills2([...billsleft,{item:ele.item,monthlycost:ele.monthlycost,counted:!ele.counted,}])
    }
    const {handlecountedC1}=props;
//both onClick={()=>{handlecountedC1(bill)}} and  onClick={()=>{handleCounted3(bill)}} ARE OK
    //handleCounted3+sort==handlecountedC1+sort==handleCounted2==handlecountedB1

/*
    return (
        <div>
            { allbills2.map(
                (bill) => <DisplayABill eachbill={bill} allbills2b={allbills2}/>
            )}
        </div>
    );
    //could pass down handleCounted2 or handlecountedB1; handleCounted3 or handlecountedC1 to DisplayAbill.js
    //the above functions could be redefined in displayabill.js with allbills2 & setallbills2 passed down to

 */
    return (
        <div className='bill-list-container'>
            { allbills2.map(
                (bill,index) => {
                    return (
                        <div key={index} className='bill-list-row'>
                            <input type="checkbox" value={bill.counted} checked={bill.counted}
                                   onClick={()=>{handlecountedB1(bill)}}
                                   className='form-check-input'></input>
                            <div className='bill-list-row-content'>
                                {bill.item} costs {bill.monthlycost}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
}