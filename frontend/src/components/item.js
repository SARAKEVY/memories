import { useState } from "react";
<<<<<<< HEAD:frontend2/src/components/item.js
import { useForm } from "react-hook-form";
 import ItemProperty from "./itemProperty";
=======
import ItemProperty from "./itemProperty";
>>>>>>> e108fb67d2de24ba089088d660a20156e63ce7e4:frontend/src/components/item.js
import ImageUpload from "./imageUpload";
//import SideNav from "./sideNav";
import React from "react";
//import CalendarItem from "./calendarItem";


export default function Item() {

  let { register, handleSubmit, formState: { errors } } = useForm();

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

<<<<<<< HEAD:frontend2/src/components/item.js

//  const onChangeItemProperty = () => {
//   console.log('itemPropertyBack///////');//{ text: e.target.value }
// };

//onChangeItemProperty={onChangeItemProperty}



//onChangeItemProperty={onChangeItemProperty}

 // const [itemTitle,setItemTitle] = useState('');
=======
  const [locationArray,setLocationArray] = useState(myLocationArray); 
  const [locationPlaceHolder,setLocationPlaceHolder]= useState("מיקום ?");
>>>>>>> e108fb67d2de24ba089088d660a20156e63ce7e4:frontend/src/components/item.js



  return (
    <div className="container">
       <div className="card">
       <div className="p-fluid p-grid p-formgrid">
                    
                    <div className="p-field p-col-12 p-md-4">
      <ImageUpload></ImageUpload>
      <label>Title</label>
      <input placeholder="The title of the picture"></input>
      <label>Description</label>
      <input placeholder="The picture description"></input>
      <ItemProperty optionsArray={figuresArray} place_holder={figuresPlaceHolder} ></ItemProperty>
      <br />
      <ItemProperty optionsArray={locationArray} place_holder={locationPlaceHolder}></ItemProperty>
      <br/>
     {/* <CalendarItem></CalendarItem>
 */}

      </div>
      </div>
      </div>
    </div>
  );
}
