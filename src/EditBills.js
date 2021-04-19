import React from 'react';
import './editBills.css'

export const EditBills =(props) => {
    const {editornot1,seteditmodeenabled1,editmodeenabled1}=props;
    const editornot=()=>{
        seteditmodeenabled1(!editmodeenabled1); //ok
    //    seteditmodeenabled1(randomeditModeEnabled => {return !randomeditModeEnabled;}) //ok
    //    seteditmodeenabled1(randomeditModeEnabled => !randomeditModeEnabled) //ok
    }//onClick={editornot1}


    const {switcheditmode1}=props;
    const switchEditMode =()=>{

    } //
    const {allbills0,setallbills0}=props;
    //just like displayallbills - this needs allbiils props here
    const handleUpdate1=(Abill,e)=>{
        setallbills0(allbills0.map(
            eachbill => {
              //  return (
                    if(eachbill.item===Abill.item){
                        return {...eachbill,monthlycost:e.target.value,}; //counted:true //counted: counted //counted
                    } //return an element of an array {...,}
                    else
                        return eachbill;
             //   );
            }
        ))
    }
    const handleUpdate2=(Abill,e)=>{
        const billleft=allbills0.filter(ele=>ele.item!==Abill.item);
        setallbills0([...billleft,{item:Abill.item,monthlycost:e.target.value,counted:Abill.counted,}]);
    } //[...,]
    //both handleUpdate1 & 2 ARE OK
    const {handleupdateA1,handleupdateB1,handledelete1}=props;
//these above constants are ok too
    //handlleUpdate1==handleupdateA1==hanldeUpdate2+sort==handleupdateB1+sort

    const handleDelete=(Abill)=>{
        const billleft=allbills0.filter(ele=>ele.item!==Abill.item);
        setallbills0(billleft);
    }
    return ( //input onchange is like total button total onclick
        <div className='edit-bill-container'>
            <div onClick={editornot}>done! - for testing only during dev - pls press 'reedit done!' instead </div>
            <h6 onClick={switcheditmode1} className='edit-mode-done-btn'>reedit done!</h6>
            {allbills0.map(
                (bill,billIndex) => {
                    return (
                        <div key={billIndex} className='edit-bill-row'>
                            <div className='edit-bill-row-content'>
                                <div className='edit-bill-title'>{bill.item}</div>
                                <input type="number" value={bill.monthlycost} className='edit-bill-cost-input'
                                       onChange={(e)=>{handleupdateA1(bill,e)}}></input>
                                <h6 onClick={()=>{handleDelete(bill)}} className='delete-button'>delete item</h6>
                            </div>
                            <hr></hr>
                        </div>
                    );
                }
            )}
        </div>


    )
}