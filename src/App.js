import logo from './logo.svg';
import './App.css';
import {TimeOption} from "./TimeOption";
import {AddOneNewBill} from "./AddOneNewBill";
import {DisplayBills} from "./DisplayBills";
import {useState} from "react";
import {TotalCosts} from "./TotalCosts";
import {EditBills} from "./EditBills";

function App(props) {
  const {editornot2,seteditmodeenabled2,editmodeenabled2}=props;
  const editornot=()=>{
    seteditmodeenabled2(!editmodeenabled2); //ok
   //   seteditmodeenabled2(randomeditModeEnabled => {return !randomeditModeEnabled;}) //ok
  //    seteditmodeenabled2(randomeditModeEnabled => !randomeditModeEnabled) //ok
  }//onClick={props.editornot2}

    const [timeScale,setTimeScale]=useState("monthly");
  const switchTimeScale =(e)=>{
      setTimeScale(e.target.innerText);
   //   console.log(e.target.innerText);
  }

  //below addonenewbill.js
    const [specificBillItem,setSpecificBillItem]=useState("");
    const [specificBillMonthlyCost,setSpecificBillMonthlyCost]=useState("");
    const typeSpecificBillItem=(e)=>{
        setSpecificBillItem(e.target.value);
        console.log(e.target.value);
    }
    const typeSpecificBillMonthlyCost=(e)=>{
        setSpecificBillMonthlyCost(e.target.value);
        console.log(e.target.value);
    }


  const [allBills,setAllBills]=useState([]);
  const addAnotherBill =(anotherbill)=>{
      localStorage.setItem('my-bills', JSON.stringify(anotherbill));
      setAllBills([...allBills,anotherbill]);
  }

    const [specificBillCounted,setSpecificBillCounted]=useState(true);
    const addSpecificBill =()=>{
        localStorage.setItem('my-bills', JSON.stringify({item:specificBillItem,monthlycost:specificBillMonthlyCost,counted:specificBillCounted,}));//counted:true,
        //localstorage not working and all fields are 0 (as no specificbillxxx) if only passing this addspecificbill function
        // without passing typespecificbillitem & typespecificbillmonthlycost these two funcs and using them in addonenewbill.js input onChange
        //if no passing specificbillxxx -> only can type one character in <input>
        setAllBills([...allBills, {item:specificBillItem,monthlyCost:specificBillMonthlyCost,counted:specificBillCounted}]); //counted:true
    }


//below displaybill.js
  //  const [specificBillCounted,setSpecificBillCounted]=useState(true);
    const handleCountedA=(ele)=>{
        allBills.map(eachbill => {
                if(eachbill.item===ele.item){
                    setSpecificBillCounted(!eachbill.counted);
                }
                return eachbill;});
    } //not right

    const handleCountedB =(ele)=>{
        setAllBills(allBills.map(
            eachbill => {
                if(eachbill.item === ele.item){
                    return {...eachbill,counted:!eachbill.counted,};
                }
                else
                    return eachbill;
            }
        ));
    }
    const handleCountedC =(ele)=>{
        const billsleft=allBills.filter(eachbill => eachbill.item!==ele.item);
        setAllBills([...billsleft,{item:ele.item,monthlycost:ele.monthlycost,counted:!ele.counted,}])
    }
    //both handleCounted B & C are ok to passed onto displaybill.js

//editbill.js below
    //for editbills.js and pass allbills to it
    const [reEdit,setReEdit]=useState(false);
    const switchEditMode=()=>{
        setReEdit(!reEdit);
    }


//editball.js function/methods
    const handleUpdateA=(ele,e)=>{
        setAllBills(allBills.map(
            eachbill => {return eachbill.item===ele.item?{...eachbill,monthlycost:e.target.value,}:eachbill;}
        ))
    }
    const handleUpdateB=(ele,e)=>{
        const billleft=allBills.filter(el=>el.item!==ele.item);
        setAllBills([...billleft,{item:ele.item,monthlycost:e.target.value,counted:ele.counted,}]);
    } //[...,]
    //both handleUpdateA & B ARE OK

    const handleDelete=(element)=>{
        const billleft=allBills.filter(ele=>ele.item!==element.item);
        setAllBills(billleft);
    }


    return reEdit?<EditBills switcheditmode1={switchEditMode} allbills0={allBills} setallbills0={setAllBills}
                           handleupdateA1={handleUpdateA} handleupdateB1={handleUpdateB} handledelete1={handleDelete}/>
                           :(
                <div>
                    <div onClick={editornot}>Edit? - for testing only during dev - pleaseclick re-edit instead</div>
                      <br></br>
                    <TimeOption switchtimescale1={switchTimeScale} settimescale1={setTimeScale} timeScale1={timeScale}/>
                      <br></br>
                    <AddOneNewBill addanotherbill1={addAnotherBill} setallbills1={setAllBills} allbills1={allBills}
                                   addspecificbill1={addSpecificBill}
                                   typespecificbillitem1={typeSpecificBillItem} typespecificbillmonthlycost1={typeSpecificBillMonthlyCost}
                                   specificbillitem1={specificBillItem} specificbillmonthlycost1={specificBillMonthlyCost}
                                   />
                      <br></br>

                    <DisplayBills allbills2={allBills}
                                  handlecountedA1={handleCountedA} setspecificbillcounted1={setSpecificBillCounted}
                                  addanotherbill2={addAnotherBill} setallbills2={setAllBills}
                                  handlecountedB1={handleCountedB}
                                  handlecountedC1={handleCountedC}/>
                      <br></br>
                      <TotalCosts timescale1={timeScale} allbills3={allBills}/>
                      <br></br>
                      <h6 onClick={switchEditMode} className='edit-mode-btn'> reedit!</h6>
                </div>)
  ;
}

export default App;
