import React, {useState} from 'react';
import './addBill.css';

export const AddOneNewBill =(props) => {
    const {addanotherbill1, setallbills1, allbills1} = props;
    const {addspecificbill1, typespecificbillitem1, typespecificbillmonthlycost1, specificbillitem1, specificbillmonthlycost1} = props;

    const [item, setItem] = useState("");
    const [monthlyCost, setMonthlyCost] = useState("");
    const [counted, setCounted] = useState(true);

    const typeItem = (e) => {
        setItem(e.target.value);
    }
    const typeMonthlyCost = (e) => {
        setMonthlyCost(e.target.value);
    }

    const billObjectValid = () => {
        const costValid = monthlyCost && Number.parseFloat(monthlyCost);
        const titleValid = item && item.split('').find(char => char !== ' ');
        return titleValid && costValid;
    };
    const clearForm = () => {
        setItem("");
        setMonthlyCost("");
    }

    const addanotherbill = () => {
        if (billObjectValid()) {
            localStorage.setItem('my-bills', JSON.stringify({item, monthlycost: monthlyCost, counted,}));
            setallbills1([...allbills1, {item, monthlycost: monthlyCost, counted,}]);
            //or
            //    addanotherbill1({item,monthlycost:monthlyCost,counted,}); //ok
            clearForm();
        }
        //  NOT button onClick={addanotherbill1}  !!
    }

        return (
            <div className='add-bill-container'>
                <input type="text" value={item} onChange={typeItem}
                       className='add-bill-form-control form-control' placeholder='Enter bill title'/>
                <input type="number" value={monthlyCost} onChange={typeMonthlyCost}
                       className='add-bill-form-control form-control' placeholder='Enter bill monthly cost'/>
                <button onClick={addanotherbill}
                        className='add-bill-form-control btn btn-primary'> add to your bills </button>
            </div>
        );
    }

     /*
    return (
        <div>
            <input type="text" value={specificbillitem1} onChange={typespecificbillitem1}/>
            <input type="text" value={specificbillmonthlycost1} onChange={typespecificbillmonthlycost1}/>
            <button onClick={addspecificbill1}> add to your bills</button>
        </div>
    );
}
//ok
     */