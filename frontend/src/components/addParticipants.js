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
import { useNavigate, useParams } from "react-router-dom";

import  "../App.css";
import "../index.css";


function AddParticipants(props){

   // const { id } = useParams();
    
useEffect(() => {
    props.updateAccount()
}, [])



    const [ participantsList, setParticipantsList]= useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user ,setUser] = useState(null);
    const history = useNavigate();

     const defaultValues = {
        email: '',    
    } 

    

   const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues});

    const addParticipants = (e)=> {
        console.log(e);
        
        /* const newArr = participantsList;
        newArr.push(value);
        setParticipantsList(newArr);
        console.log(newArr);
        reset(); */

    }

    const onSubmit =  async(e) => {

    console.log("form", participantsList);
       try{
        await accountService.addAccount(participantsList);
        toast.success('login success!')
        props.updateUser();
        window.location = '/account2';
        history('/accountValidation')
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
            <div className="container form-demo col-lg-6">
            

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <h5 className="p-text-center h1">Add Participants</h5>
                        <form  className="p-fluid">
                          
                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <Controller name="email" control={control}
                                        rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="email" className={classNames({ 'p-error': errors.email })}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            
                           <div className="container d-flex justify-content-center col-xl-6">
                            <button onClick={() => addParticipants()} className="btn btn-success p-3 m-5 col-xl-6 p-mt-2 me-5">Add participants</button>
                            <button onClick={() => onSubmit}  className="btn btn-primary p-mt-2 m-5 col-xl-6">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default AddParticipants;