import React, { useState ,useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import ItemProperty from "./itemProperty";
import ImageUpload from "./imageUpload";
import SideNav from "./sideNav";
import CalendarItem from "./calendarItem";
import itemService from '../services/itemService';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import locationService from "../services/locationService";



export default function Item(props) {

useEffect(() => {
  props.updateAccount();
});

  const defaultValues = {
    id: '',
    fileUrl: '',
    figures: [],
    title: '',
    description: '',
    locations: [],
  }
  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


  const myFiguresArray = [
    { id: 'chocolate', name: 'סבא נתן' },
    { id: '324', name: 'סבתא נחמה' },
    { id: 'strawberry', name: 'ישי יום הולדת שמח' },
    { id: 'vanilla', name: 'דודה יהודית' }
  ]



  const [figuresArray, setFiguresArray] = useState(myFiguresArray);
  const [figuresPlaceHolder, setPersonPlaceHolder] = useState('הדמות/יות המשויכות ?');
  const [figuresSelectValue, setFiguresSelectValue] = useState([]);//figuresArray[2]);

  const [locationArray, setLocationArray] = useState([]);
  const [locationPlaceHolder, setLocationPlaceHolder] = useState("מיקום ?");
  const [locationSelectValue, setLocationSelectValue] = useState([]);

  const [calenderDefaultValue, setCalenderDefaultValue] = useState(null);

  

  const writerArry = [{ id: '1', writerName: 'chaya', text: 'התמונה הצטלמה בגן ליד הבית' }, { id: '2', writerName: 'ahova', text: 'זה היה ביום ההולדת הרביעי של סבתא' },
  { id: '3', writerName: 'sari', text: 'ד3' }, { id: '4', writerName: 'בילי', text: 'העץ הזה עדיין קיים' }, { id: '5', writerName: 'יוסף', text: 'דוד נפתלי צלם את התמונה' }];

  //const[htmlTextArea,setHtmlTextArea]=useState('');

    useEffect(()=>{
        //console.log('sssssss');
        //if(Array.isArray(locationArray) && locationArray.length == 0 ){
      locationService.getLocations().then(data=>{setLocationArray(data)});
   //  setLocationSelectValue([Array.from(locationArray)[0],Array.from( locationArray)[2]]);
   // });}
    },[]);
    

  function clickFigures(value) {
    setFiguresSelectValue(value);
    
    // alert(JSON.stringify(figuresSelectValue));
  }
  function clickLocation(value) {
    setLocationSelectValue(value);
  //   alert(JSON.stringify(locationSelectValue));
  }
  const htmlList = locationArray.map((l)=> <h6>{l.name}</h6>);
  const htmlFingures = JSON.stringify(locationSelectValue);
  const htmlTextArea = writerArry.map((writer) =>
    <div className="row "><label>{writer.writerName}</label><textarea value={writer.id} name={writer.id && writer.name} cols="10" rows="2">{writer.text}</textarea></div>
  );

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await itemService.addItem(data);
    }
    catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="container">
      <p>{htmlList}</p>
<p>{htmlFingures}</p>
      <SideNav />
      <div className="container text-center card">
        <div className="p-fluid p-grid p-formgrid">

          <div className="row ">
           
              <div className="col-md-6" >

                <ImageUpload></ImageUpload>
              </div>
              <div className="col-md-6">

              <form onSubmit={handleSubmit(onSubmit)} >
                <span className="p-float-label">
                   <Controller name="title" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.title} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  <label htmlFor="title" className={classNames({ 'p-error': errors.name })}>Titel</label>
                </span>
                <span className="p-float-label">
                  <Controller name="description" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.description} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  <label htmlFor="description" className={classNames({ 'p-error': errors.name })}>Description</label>
                </span>


                <ItemProperty optionsArray={figuresArray} place_holder={figuresPlaceHolder} defaultValue={figuresSelectValue} onChildClick={clickFigures}></ItemProperty>
                <br />
                <ItemProperty optionsArray={locationArray} place_holder={locationPlaceHolder} defaultValue={locationSelectValue} onChildClick={clickLocation}></ItemProperty>
                <br />
                <CalendarItem defaultValue={calenderDefaultValue}></CalendarItem>
                <button>save</button>
                </form>
              </div>
            
          </div>
          {htmlTextArea}
        </div>
      </div>
    </div>
  );
}
