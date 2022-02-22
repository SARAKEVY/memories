import  React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import {toast} from 'react-toastify';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
//import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import accountService from '../services/accountService';
import userService from '../services/userService';
import {useNavigate} from 'react-router-dom';

import  "../App.css";
import "../index.css";


function JoinAccount(props){


    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user ,setUser] = useState(null);
    const history = useNavigate()

    const defaultValues = {
        accountId:''
        
    }

   const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

 

    const onSubmit =  async(data) => {
        setFormData(data);
        setShowMessage(true);
        console.log("form", data);
       try{
        await accountService.joinAccount (data);
        reset();
        toast.success('login success!')
        props.updateAccount();
        
        const newData = {
        userId: props.user._id, 
        accountId: props.account._id,
        accountName:data.accountName
        } 
        console.log(newData);
        await userService.addJoinAccount(newData);
        
        history('/item');
        }
       catch(ex) {
        console.log(ex);
        }
        


    };





    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );


    return(
        <div className="container mt-8 ">
            
            <div className="container form-demo col-lg-5" >
               {/*  <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="text-center mt-8 p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                    </div>
                </Dialog> */}

                <div className="p-d-flex p-jc-center">
               
                    <div className="card">
                        <h5 className="p-text-center h1">Join Acconut</h5>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

                        <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="accountName" control={control} rules={{ required: 'Account Name is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.accountName} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accountName" className={classNames({ 'p-error': errors.accountName })}>Account Name*</label>
                                </span>
                                {getFormErrorMessage('accountName')}
                            </div>

                        <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="accountId" control={control} rules={{ required: 'Code is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.accountId} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accountId" className={classNames({ 'p-error': errors.accountId })}>Account Code*</label>
                                </span>
                                {getFormErrorMessage('accountId')}
                            </div>
                           
                            <Button type="submit" label="Submit" className="p-mt-2" />
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default JoinAccount