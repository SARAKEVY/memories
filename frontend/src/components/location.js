import  React, {useState} from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import locationService from '../services/locationService';
//import { useNavigate } from 'react-router-dom';


import  "../App.css";
import "../index.css";


function Location(){


    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [locationArray, setLocationArray] = useState({});

    useEffect(()=>{
        //console.log('sssssss');
      locationService.getLocations().then(data=>{setLocationArray(data);});
  //console.log('a',locationArray);
    });
//   useEffect(()=>{
//     utilsService.getItemsById("https://jsonplaceholder.typicode.com/users",props.userId).then(data=>{setUserName(data.name);});
// },[props.userId]);

  const htmlLocation = Array.from( locationArray).map((l)=>
     <React.Fragment key={l.id}>
        <div className="row "><h5>{l.id}- {l.name}<small>, {l.description}</small></h5></div>
    </React.Fragment>
  );
   
    const defaultValues = {
        name: '',
        description:''
    }

   

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit =  async(data) => {
       setFormData(data);
       
        console.log("form", data);
       try{
        await locationService.addLocation (data)
        setShowMessage(true);
        }
       catch(ex) {
        console.log(ex);
        }

        localStorage.setLocation("location",  JSON.stringify(data));
       


    };





    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  


    return(
        <div className="container mt-8 ">
            <div className="container form-demo col-lg-6">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="text-center mt-8 p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Add Location Successful!</h5>
                        
                    </div>
                </Dialog>

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                    
                        {htmlLocation}
                        <br></br>
                        <h5 className="p-text-center h1">Add New Location</h5>
                        <br></br>
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
                                <span className="p-float-label">
                                    <Controller name="description" control={control}  render={({ field, fieldState }) => (
                                    <InputText id={field.description} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="description" className={classNames({ 'p-error': errors.description })}>description</label>
                                </span>
                                {getFormErrorMessage('description')}
                            </div>
                          
                           
                           
                            <Button type="submit" label="Submit" className="p-mt-2" />
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Location