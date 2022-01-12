//import reactSelect from 'react-select';
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';

const React = require('react')



export default function  ItemProperty(props){

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     file: null
  //   }


//}

  //   render: function() {

  //     var Data     = ['this', 'example', 'isnt', 'funny'],
  //         MakeItem = function(X) {
  //             return <option>{X}</option>;
  //         };


  //     return <select>{Data.map(MakeItem)}</select>;

  // }

    return (
      <div>
    <Select  
      options={props.optionsArray}
      isMulti
      placeholder={props.place_holder}
      autoFocus
      isSearchable></Select><button>+</button>
      </div>
    );
  
  }
 

