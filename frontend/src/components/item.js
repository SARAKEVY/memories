import React,{ useState } from "react";
import ItemProperty from "./itemProperty";
import ImageUpload from "./imageUpload";
import SideNav from "./sideNav";
import CalendarItem from "./calendarItem";


export default function Item() {


  const myFiguresArray = [
    { value: 'chocolate', label: 'סבא נתן' },
    { value: 'strawberry', label: 'סבתא נחמה' },
    { value: 'vanilla', label: 'דודה יהודית' }
  ]

  const myLocationArray = [
    { value: 'chocolate', label: 'ישראל - ירושלים' },
    { value: 'strawberry', label: 'הונגריה - בודפסט' },
    { value: 'vanilla', label: 'צרפת - פריס' }
  ]

  const [figuresArray,setFiguresArray] = useState(myFiguresArray); 
  const [figuresPlaceHolder,setPersonPlaceHolder] =useState('הדמות/יות המשויכות ?'); 

  const [locationArray,setLocationArray] = useState(myLocationArray); 
  const [locationPlaceHolder,setLocationPlaceHolder]= useState("מיקום ?");

  function clickAlert(){
    alert("I am working")
}

  return (
    <div className="container">
      <SideNav/>
       <div className="container text-center card">
       <div className="p-fluid p-grid p-formgrid">
                    
                    <div className="p-field p-col-12 p-md-4">
      <ImageUpload></ImageUpload>
      <label>Title</label>
      <input></input>
      <label>Description</label>
      <input></input>
      <ItemProperty optionsArray={figuresArray} place_holder={figuresPlaceHolder}  onChildClick={clickAlert}></ItemProperty>
      <br />
      <ItemProperty optionsArray={locationArray} place_holder={locationPlaceHolder}></ItemProperty>
      <br/>
     <CalendarItem></CalendarItem>


      </div>
      </div>
      </div>
    </div>
  );
}
