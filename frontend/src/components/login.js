import  React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import {toast} from 'react-toastify';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
//import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import userService from '../services/userService';
import ErrorMassege from './common/errorMassege';
import {Link, useNavigate } from 'react-router-dom';
import GoogleLogin from './googleLogin';

import  "../App.css";
import "../index.css";


function Login(props){

    const [currentError, setCurrentError] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user ,setUser] = useState(null);
    const history = useNavigate();

    const defaultValues = {
        email: '',
        password:''
        
    }

   const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

 

    const onSubmit =  async(data) => {
        setFormData(data);
        setShowMessage(true);
        console.log("form", data);
       try{
        await userService.login (data);
        toast.success('login success!')
        props.updateUser();
        window.location = '/account2';
        }
       catch(ex) {
            console.log(ex.response);
            if(ex.response.status === 400){
                setCurrentError('Email or password incorrect' );
            }
    }
}





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
                <div className="text-center mb-3" style={{border:"1px solid #E0E0E0", borderRadius:"3px"}}>
                <GoogleLogin updateUser={props.updateUser} user={props.user}/>
                </div>
                    <div className="card">
                        <h5 className="p-text-center h1">Login</h5>
                       
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                         
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
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                        <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
                                    )} />
                                    <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>
                            
                             { currentError && <ErrorMassege massegeText={currentError}/>} 
                            
                            <Button type="submit" label="Submit" className="p-mt-2" />
                            <p className="text-center h5 mt-3" style={{color:"red"}} >Not yet registered?  <Link to="/signup" style={{color:"red"}}>Enter here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Login