import  React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import userService from '../services/userService';
import { useNavigate, Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import GoogleLogin from './googleLogin';
import ErrorMassege from './common/errorMassege';
import  "../App.css";
import "../index.css";


function Signup(props){

    const [error, setError] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user ,setUser] = useState(null);
    const history = useNavigate();

    const defaultValues = {
        name: '',
        email: '',
        password:''
        
    }

   const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

   /*  useEffect(()=>{
     setUser(user)
    },[]) */

    const onSubmit =  async(data) => {
        setFormData(data);
        /* setShowMessage(true); */
        console.log("form", data);
       try{
        await userService.addUser (data)
        toast.success(`${data.name}, You have successfully registered, now login!`);
        history('/login');
        }
       catch(ex) {
        console.log(ex.data);
        console.log(ex.response.status);
        if(ex.response.status === 400){
            setError("user exists, now login");
           
        }
        else if(ex.response.status === 500){
            setError('There is a problem, please try again later')
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
            <div className="container form-demo col-lg-5">
                {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="text-center mt-8 p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                        </p> 
                    </div>
                </Dialog>
 */}
                <div className="p-d-flex p-jc-center">
                <div className="text-center mb-3" style={{border:"1px solid #E0E0E0", borderRadius:"3px", margin:"0px"}}>
                <GoogleLogin updateUser={props.updateUser} user={props.user}/>
                </div>
                    <div className="card">
                        <h5 className="p-text-center h1">Register</h5>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="name" control={control} rules={{ required: 'name is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
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
                            { error && <ErrorMassege massegeText={error}/>}

                                        
                            <Button type="submit" label="Submit" className="p-mt-2" />
                           <p className="text-center h5 mt-3" style={{color:"red"}} >Already registered? <Link to="/login" style={{color:"red"}}>Log in here</Link></p>  
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Signup;