import {useState} from "react";
import ItemProperty from "./itemProperty";
import ImageUpload from "./imageUpload";


const React = require('react')



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

  
  
    return (
      <div className="container">
    <ImageUpload></ImageUpload>
    <ItemProperty optionsArray={figuresArray} place_holder={figuresPlaceHolder}></ItemProperty>
    <br/>
    <ItemProperty optionsArray={locationArray} place_holder={areaLocationHolder}></ItemProperty>
      </div>
    );;
  }
