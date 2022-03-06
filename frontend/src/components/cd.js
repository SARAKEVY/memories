
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


export default function Cd(props) {
    props=Date.now();
    useEffect(() => {
        const  today = props.getFullYear() + '-' + (props.getMonth() + 1) + '-' + props.getDate();
    }, )

    // const [myDate, setMyDate] = useState([]);


      const  today = props.getFullYear() + '-' + (props.getMonth() + 1) + '-' + props.getDate();

    return (

        <div>
            <h1>
                {today}
            </h1>
        </div>

    );



}