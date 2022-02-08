import React,{useState} from "react";
import Select from 'react-select';

export default function ItemProperty(props){
    // onChange={(e)=>onChangeItemProperty(e.value)}
  // onChange={props.onChangeItemProperty}
  //function onChangeSelect(e){
   // alert(e);
    //props.onChildClick();

//}
     return(
      <div>
        
      <Select
      getOptionLabel={option => option.name}
      getOptionValue={option => option.id}
      options={props.optionsArray}
      isMulti
      placeholder={props.place_holder}
      autoFocus
      isSearchable
      defaultValue={props.defaultValue}
      onChange={props.onChildClick}
      ></Select><button>+</button>

      </div>
    )
}

