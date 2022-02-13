import  React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import accountService from '../services/accountService';
import { useNavigate } from 'react-router-dom';

import  "../App.css";
import "../index.css";


function Account2(props){


    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [user ,setUser] = useState(null);
    const history = useNavigate();

  const defaultValues = {
        accountName: '',
        accountType:'',
        accountTarget:'',
        accountDescription:'',
        managerName:'',
        managerEmail: '',
        accountPassword:'',
        participants:''
        
    } 

   const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit =  async(data) => {
        setFormData(data);
        setShowMessage(true);
        console.log("form", data);
       try{
        await accountService.addAccount (data)
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
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="text-center mt-8 p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                    </div>
                </Dialog>

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <h5 className="p-text-center h1">Register</h5>
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
                                    <Controller name="accountType" control={control} rules={{ required: 'Type is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.accountType} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accountType" className={classNames({ 'p-error': errors.accountType })}>Account Type*</label>
                                </span>
                                {getFormErrorMessage('accountType')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="accountTarget" control={control} rules={{ required: 'Type is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.accountTarget} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accountTarget" className={classNames({ 'p-error': errors.accountTarget })}>Account Target*</label>
                                </span>
                                {getFormErrorMessage('accountTarget')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="accountDescription" control={control} rules={{ required: 'Type is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.accountDescription} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accountDescription" className={classNames({ 'p-error': errors.accountDescription })}>Account Description*</label>
                                </span>
                                {getFormErrorMessage('accountDescription')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="managerName" control={control} rules={{ required: 'Type is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.managerName} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="managerName" className={classNames({ 'p-error': errors.managerName })}>Manager Name*</label>
                                </span>
                                {getFormErrorMessage('managerName')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <Controller name="managerEmail" control={control}
                                        rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                        render={({ field, fieldState }) => (
                                            <InputText id={field.managerEmail} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="managerEmail" className={classNames({ 'p-error': errors.managerEmail })}>Manager Email*</label>
                                </span>
                                {getFormErrorMessage('managerEmail')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="accountPassword" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                        <Password id={field.accountPassword} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
                                    )} />
                                    <label htmlFor="accountPassword" className={classNames({ 'p-error': errors.accountPassword})}>Account Password*</label>
                                </span>
                                {getFormErrorMessage('accountPassword')}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="participants" control={control} rules={{ required: 'Type is required.' }} render={({ field, fieldState }) => (
                                        <InputText id={field.participants} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="participants" className={classNames({ 'p-error': errors.participants })}>Participants*</label>
                                </span>
                                {getFormErrorMessage('participants')}
                            </div>
                           
                            <Button type="submit" label="Submit" className="p-mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Account2;