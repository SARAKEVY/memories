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
import TextAreaDetails from "./textAreaDetails";
import imageService from "../services/imageService";

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

  const [selectedFile,setSelectedFile] = useState(null);
  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

 
  const [myFile,setMyFile]=useState(null);
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
  const [isItem,setIsItem]=useState(false);
  const [objectItem,setObjectItem]= useState(null);
 
  
    useEffect(()=>{
      locationService.getLocations().then(data=>{setLocationArray(data)});
      
      const myFiguresArray = [
        { id: 'chocolate', name: 'סבא נתן' ,description: 'fdg'},
        { id: '324', name: 'סבתא נחמה' ,description: 'fdg' },
        { id: 'strawberry', name: 'ישי יום הולדת שמח' ,description: 'fdg' },
        { id: 'vanilla', name: 'דודה יהודית'  ,description: 'fdg'}
      ];

      console.log("itemId: 1,============= בשליחה לפרטים itemId!!!!!!!!!!!!!!");
        

      setFiguresArray(myFiguresArray);
      
   
    },[]); 




    
  function clickImageUpload(value){
    setSelectedFile({
      selectedFile:value,
      loaded: 0,
    })
    console.log('selectedFile&&&&&&',value);
    setMyFile(value);
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

  //const htmlList = locationArray.map((l,i)=> <h6 key={i}>{l.name}</h6>);
  //const htmlLocations = JSON.stringify(locationSelectValue);
  const htmlFingures = JSON.stringify(figuresSelectValue);

  const onSubmit = async (data) => {
    console.log('data',data);
    console.log('accountId:56545 -----------props.accountId!!!!!',data);
    try {
    //if (data != undefined){

      const i = {
      fileUrl: '',
      //file:myFile.selectedFile,
      figures: figuresSelectValue,
      title: data.title,
      description: data.description,
      locations: locationSelectValue,
      takenDate:takenDate,
      accountId:56545//props.accountId,
    };
    console.log('selectedFile',selectedFile);
    await imageService.addImage(selectedFile);
    await itemService.addItem(i).then(data=>{setObjectItem(data)}).errors(console.log('service erorr'));;
    
    //}
    
     
    //React.forwardRef()
    console.log('objectItem',objectItem);
    console.log('objectItem._id',objectItem._id);
    if(objectItem != undefined && objectItem._id != null)
    {
      setIsItem(true);
    }
    
    
      
    }
    catch (ex) {
      console.log(ex);
    }
  };

  const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  
  
  return (
    <div className="container">
      {/* <div>{htmlList}</div> */}
      {/* <div>{htmlFingures}</div> */}
      {/* <div>{htmlLocations}</div> */}
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
              <br></br>
                <span className="p-float-label">
                   <Controller name="title" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.title} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  {/* <button onClick={setShowMessage(true)}></button> */}
                  <label htmlFor="title" className={classNames({ 'p-error': errors.title })}>Titel</label>
                </span>
                <br></br>
                <span className="p-float-label">
                  <Controller name="description" control={control} render={({ field, fieldState }) => (
                    <InputText id={field.description} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                  )} />
                  <label htmlFor="description" className={classNames({ 'p-error': errors.name })}>Description</label>
                </span>
                <br></br>
                <span className="p-float-label">
                   <ItemProperty  optionsArray={figuresArray} place_holder={figuresPlaceHolder} defaultValue={figuresSelectValue} onChildClick={clickFigures}></ItemProperty>
                   
                
                  </span>
                  <br></br>
                  <span className="p-float-label">
                   <ItemProperty  optionsArray={locationArray} place_holder={locationPlaceHolder} defaultValue={locationSelectValue} onChildClick={clickLocation}></ItemProperty>
                 
                  </span>
                  <br></br>
                 
                  <span className="p-float-label"> <CalendarItem  defaultValue={calenderDefaultValue} onChildClick={clickCalendar}></CalendarItem>
                
                  </span>
                
                <br></br>
                <Button type="save" label="save" className="p-mt-2" /> 
                </form>
              </div>
            
          </div>
          {/* {myHtmlTextAreaDetails}
          <TextAreaDetails item={4562} user={852}></TextAreaDetails>
          { this.state.showResults ? <Results /> : null } */}
         {isItem ? <TextAreaDetails itemId={objectItem._id/*defaultValues.id*/} user={props.user}></TextAreaDetails>:null }
        </div>
      </div>
    </div>
  );
}
