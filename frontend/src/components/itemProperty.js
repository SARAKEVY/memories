import React,{useState} from "react";
import Select from 'react-select';

export default function ItemProperty(props){
    // onChange={(e)=>onChangeItemProperty(e.value)}
  // onChange={props.onChangeItemProperty}
     return(
      <div>
        
      <Select
      options={props.optionsArray}
      isMulti
      placeholder={props.place_holder}
      autoFocus
      isSearchable
      onChange={props.onChildClick}
      ></Select><button>+</button>
<button onClick={props.onChildClick}>ggggggggggg</button>

      </div>
    )
}

