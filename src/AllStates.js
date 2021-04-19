import React, {useState} from 'react';

import {EditBills} from "./EditBills";
import App from "./App";
import './appContainer.css'


export const AllStates = () =>{
    const [editModeEnabled,setEditModeEnabled]=useState(false);
    const editOrNot = () =>{
        setEditModeEnabled(!editModeEnabled); //ok
    //    setEditModeEnabled(editModeEnabled => {return !editModeEnabled;}) //ok
   //     setEditModeEnabled(editModeEnabled => !editModeEnabled) //ok
    }

    return (
        editModeEnabled?<EditBills seteditmodeenabled1={setEditModeEnabled} editornot1={editOrNot}
                                   editmodeenabled1={editModeEnabled}/>
        :<div className='bills-container'>
                <App seteditmodeenabled2={setEditModeEnabled} editornot2={editOrNot}
                     editmodeenabled2={editModeEnabled}/>
        </div>
    )

}