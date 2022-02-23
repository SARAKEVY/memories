import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
//import { confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import accountService from '../services/accountService';

const DeleteAccount = (props) => {
    
useEffect(() => {
    const id = props.account._id;
    console.log("i", id);
    setAccount(props.account);
})

    const history = useNavigate();

    const [ account, setAccount] = useState({})
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);


    
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    /* const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    }; */

    const confirm2 = ()=> {
       const id = account._id;
        try{
            accountService.delAccount(id);
            toast.current.show({ severity: 'info', summary: 'Account Delete', life: 3000 });
        }
        catch(ex){
            console.log(ex.massege);
        }
        
    }

    const confirm1 = () => {
        history(-1);
    }
/* 
    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    }; */

    return (
        <div>
         <div className="container col-xl-4">
         <Toast ref={toast} />

    <div className="card row mt-8">
    <h4 className="m-5 ">You're sure you want to delete the account?</h4>
    <div className="d-flex justify-content-evenly mb-6">
    <Button onClick={confirm1} icon="pi pi-times" label="No!" className="mr-2 col-xl-4"></Button>
    <Button onClick={confirm2} icon="pi pi-check" label="Delete" className="p-button-danger p-button-outlined col-xl-4"></Button>
    </div>
    
    </div>
         </div>
        </div>
    )
}
                
export default DeleteAccount;