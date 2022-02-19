import React, { useState ,useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import locationService from "../services/locationService";
import Location from "./location";
import ItemProperty from "./itemProperty";
import ImageUpload from "./imageUpload";
import SideNav from "./sideNav";
import CalendarItem from "./calendarItem";
import itemService from '../services/itemService';

export default function Item(props) {

  
  const defaultValues = {
    id: '',
    fileUrl: '',
    figures: [],
    title: '',
    description: '',
    locations: [],
    takenDate:'',
  }
  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

 
  const [fileUrl,setFileUrl]=useState('');
  const [myLocationsArry,setMyLocationsArry]=useState([]);

  const [showMessage, setShowMessage] = useState(false);
  const [figuresArray, setFiguresArray] = useState([]);
  const [figuresPlaceHolder, setPersonPlaceHolder] = useState('הדמות/יות המשויכות ?');
  const [figuresSelectValue, setFiguresSelectValue] = useState([]);//figuresArray[2]);

  const [locationArray, setLocationArray] = useState([]);
  const [locationPlaceHolder, setLocationPlaceHolder] = useState("מיקום ?");
  const [locationSelectValue, setLocationSelectValue] = useState([]);

  const [calenderDefaultValue, setCalenderDefaultValue] = useState(null);
  const [takenDate,setTakenDate] = useState(null);
 
  

  const writerArry = [{ id: '1', writerName: 'chaya', text: 'התמונה הצטלמה בגן ליד הבית' }, { id: '2', writerName: 'ahova', text: 'זה היה ביום ההולדת הרביעי של סבתא' },
  { id: '3', writerName: 'sari', text: 'ד3' }, { id: '4', writerName: 'בילי', text: 'העץ הזה עדיין קיים' }, { id: '5', writerName: 'יוסף', text: 'דוד נפתלי צלם את התמונה' }];

  //const[htmlTextArea,setHtmlTextArea]=useState('');
 
    useEffect(()=>{

      //props.updateAccount();
        //console.log('sssssss');
        //if(Array.isArray(locationArray) && locationArray.length == 0 ){
      locationService.getLocations().then(data=>{setLocationArray(data)});
      
      const myFiguresArray = [
        { id: 'chocolate', name: 'סבא נתן' },
        { id: '324', name: 'סבתא נחמה' },
        { id: 'strawberry', name: 'ישי יום הולדת שמח' },
        { id: 'vanilla', name: 'דודה יהודית' }
      ];

    

      setFiguresArray(myFiguresArray);
      
   //  setLocationSelectValue([Array.from(locationArray)[0],Array.from( locationArray)[2]]);
   // });}
    },[]); 




    
  function clickImageUpload(value){
    setFileUrl(value);
  }

  function clickFigures(value) {
    setFiguresSelectValue(value);
    
    // alert(JSON.stringify(figuresSelectValue));
  }
  function clickLocation(value) {
    setLocationSelectValue(value);
  // console.log(locationArray);
  }

  function clickCalendar(value){
    setTakenDate(value);
  }

  const htmlList = locationArray.map((l,i)=> <h6 key={i}>{l.name}</h6>);
  const htmlLocations = JSON.stringify(locationSelectValue);
  const htmlFingures = JSON.stringify(figuresSelectValue);
  const htmlTextArea = writerArry.map((writer,i) =>
    <div className="row " key={i}><label>{writer.writerName}</label><textarea value={writer.id} name={writer.id && writer.name} cols="10" rows="2">{writer.text}</textarea></div>
  );

  const onSubmit = async (data) => {
   
    const i = {
    
      fileUrl: fileUrl,
      figures: figuresSelectValue,
      title: data.title,
      description: data.description,
      locations: locationSelectValue,
      takenDate:takenDate,
    };
    //React.forwardRef()
    console.log(i);
    try {
      await itemService.addItem(i);
    }
    catch (ex) {
      console.log(ex);
    }
  };

  const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  

  return (
    <div className="container">
      <div>{htmlList}</div>
      <div>{htmlFingures}</div>
      <div>{htmlLocations}</div>
      <SideNav />
      {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="text-center mt-8 p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <Location/>
                        
                    </div>
                </Dialog> */}
      <div className="container text-center card">
        <div className="p-fluid p-grid p-formgrid">

          <div className="row ">
           
              <div className="col-md-6" >
              
                <ImageUpload onChildClick={clickImageUpload}></ImageUpload>
              </div>
              <div className="col-md-6">

              <form onSubmit={handleSubmit(onSubmit)} >
                <span className="p-float-label">
                   <Controller name="title" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.title} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  {/* <button onClick={setShowMessage(true)}></button> */}
                  <label htmlFor="title" className={classNames({ 'p-error': errors.name })}>Titel</label>
                </span>
                <span className="p-float-label">
                  <Controller name="description" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.description} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  <label htmlFor="description" className={classNames({ 'p-error': errors.name })}>Description</label>
                </span>
                <span className="p-float-label">
                   <ItemProperty  optionsArray={figuresArray} place_holder={figuresPlaceHolder} defaultValue={figuresSelectValue} onChildClick={clickFigures}></ItemProperty>
                   
                
                  </span>

                  <span className="p-float-label">
                   <ItemProperty  optionsArray={locationArray} place_holder={locationPlaceHolder} defaultValue={locationSelectValue} onChildClick={clickLocation}></ItemProperty>
                 
                  </span>
                
                 
                  <span className="p-float-label"> <CalendarItem  defaultValue={calenderDefaultValue} onChildClick={clickCalendar}></CalendarItem>
                
                  </span>
                
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
