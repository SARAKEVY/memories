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
        textDetail: '',
        detailOwnerId: '',
        detailOwnerName:''
    }
    

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


      const onSubmit =  async(data) => {
        try{
        const detailDate ={
            itemId : props.itemId,
            textDetail: data.textDetail,
            ownerId: "2",//props.user._id,
            ownerName:"chava",//props.user.name
        }
        console.log("ownerId: 1,=============props.user._id!!!!!!!!!!!!!!");
        console.log("ownerName:shifra,=============props.user.name!!!!!!!!!!!!!!");
        
        
         console.log("detailDate", detailDate);
       
         await detailService.addDetail(detailDate)
         //setShowMessage(true);
         }
        catch(ex) {
         console.log(ex);
         }
 
        // detailStorage.setDetailsArray("detail",  JSON.stringify(data));
        
 
 
     };
    
//   const writerArry = [{ id: 'hi, I am useing a new component', writerName: 'chaya', text: 'התמונה הצטלמה בגן ליד הבית' }, { id: '2', writerName: 'ahova', text: 'זה היה ביום ההולדת הרביעי של סבתא' },
//   { id: '3', writerName: 'sari', text: 'ד3' }, { id: '4', writerName: 'בילי', text: 'העץ הזה עדיין קיים' }, { id: '5', writerName: 'יוסף', text: 'דוד נפתלי צלם את התמונה' }];

  const htmlTextArea = detailsArray.map((writer,i) =>
  <div className="row " key={i}><label>{writer.ownerName}</label><textarea value={writer.textDetail} name={writer._id && writer.ownerName} cols="10" rows="2">{writer.textDetail}</textarea></div>
);


return(
    <div>
         {htmlTextArea}
         <br></br>
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
                                  <br></br>
                                <label htmlFor="textDetail" >Do You have more details to share abuot this picter?</label>
              
                                    <Controller name="textDetail" control={control}  render={({ field, fieldState }) => (
                                   <textarea id={field.textDetail} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })}  cols="10" rows="2"/>
                                   
                                    )} />
                                    <label htmlFor="textDetail" className={classNames({ 'p-error': errors.textDetail })}></label>
                                    </div>
                                </span>
                                {/* {getFormErrorMessage('description')} */}
                        
                            </div>

                        
                  
                    <Button type="add" label="Submit" className="p-mt-2" />        </form>
    </div>
)
}