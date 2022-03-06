
import React, { Component } from 'react';

import { render } from 'react-dom';

   

class App extends Component {

  constructor() {

   

    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

   

    this.state = {

      currentDate: date

    }

  }

   

  render() {

    return (

      <div>

        <p>

          { this.state.currentDate }

        </p>

      </div>

    );

  }

}

   

render(<Cd />, document.getElementById('root'));

