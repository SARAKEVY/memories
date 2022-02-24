import React, { useState ,useEffect} from "react";
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";
import detailService from "../services/detailService";

export default function TextAreaDetails(props) {

    const [detailsArray,setDetailsArray]= useState([]);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
        detailService.getDetails().then(data=>{setDetailsArray(data)});
        
      },[]); 
  
      const defaultValues = {
        detailText: '',
        detailOwner:''
    }
    

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


      const onSubmit =  async(data) => {
        setFormData(data);
        
         console.log("form", data);
        try{
         await detailService.addDetail (data)
         //setShowMessage(true);
         }
        catch(ex) {
         console.log(ex);
         }
 
        // detailStorage.setDetailsArray("detail",  JSON.stringify(data));
        
 
 
     };
    
  const writerArry = [{ id: 'hi, I am useing a new component', writerName: 'chaya', text: 'התמונה הצטלמה בגן ליד הבית' }, { id: '2', writerName: 'ahova', text: 'זה היה ביום ההולדת הרביעי של סבתא' },
  { id: '3', writerName: 'sari', text: 'ד3' }, { id: '4', writerName: 'בילי', text: 'העץ הזה עדיין קיים' }, { id: '5', writerName: 'יוסף', text: 'דוד נפתלי צלם את התמונה' }];

  const htmlTextArea = writerArry.map((writer,i) =>
  <div className="row " key={i}><label>{writer.writerName}</label><textarea value={writer.id} name={writer.id && writer.name} cols="10" rows="2">{writer.text}</textarea></div>
);


return(
    <div>
         {htmlTextArea}
         <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            {/* <div className="row " >
            <Controller name="detail" control={control} render={({ field, fieldState }) => (
                <textarea  cols="10" rows="2"></textarea>
                )} />
                  <label htmlFor="detail" className={classNames({ 'p-error': errors.detail })}>Do You have more details to share abuot this picter?</label>
              
            </div> */}
            <div className="p-field">
                                <span className="p-float-label">
                                <div className="row " >
                                <label htmlFor="detailText" >Do You have more details to share abuot this picter?</label>
              
                                    <Controller name="detailText" control={control}  render={({ field, fieldState }) => (
                                   <textarea id={field.detailText} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}  cols="10" rows="2"/>
                                   
                                    )} />
                                    <label htmlFor="description" className={classNames({ 'p-error': errors.description })}>description</label>
                                    </div>
                                </span>
                                {/* {getFormErrorMessage('description')} */}
                        
                            </div>

            
                  
                    <Button type="add" label="Submit" className="p-mt-2" />        </form>
    </div>
)
}