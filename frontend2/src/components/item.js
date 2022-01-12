import {useState} from "react";
import ItemProperty from "./itemProperty";
import ImageUpload from "./imageUpload";


const React = require('react')



export default function Item() {
  

  const myPersonArray = [
    { value: 'chocolate', label: 'סבא נתן' },
    { value: 'strawberry', label: 'סבתא נחמה' },
    { value: 'vanilla', label: 'דודה יהודית' }
  ]

  const myAreaArray = [
    { value: 'chocolate', label: 'ישראל - ירושלים' },
    { value: 'strawberry', label: 'הונגריה - בודפסט' },
    { value: 'vanilla', label: 'צרפת - פריס' }
  ]
  const [personArray,setPersonArray] = useState(myPersonArray); 
  const [personPlaceHolder,setPersonPlaceHolder] =useState('הדמות/יות המשויכות ?'); 

  const [areaArray,setareaArray] = useState(myAreaArray); 
  const [areaPlaceHolder,setAreaPlaceHolder]= useState("מיקום ?");

    return (
      <div>
    <ImageUpload></ImageUpload>
    <ItemProperty optionsArray={personArray} place_holder={personPlaceHolder}></ItemProperty>
    <br/>
    <ItemProperty optionsArray={areaArray} place_holder={areaPlaceHolder}></ItemProperty>
      </div>
    );
  }
