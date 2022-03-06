
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


export default function Cd(props) {
    props=Date.now();
    useEffect(() => {
    }, )

    const [myDate, setMyDate] = useState([]);
    const  today = props.getFullYear() + '-' + (props.getMonth() + 1) + '-' + props.getDate();

setMyDate(today);
    
    return (

        <div>
            <h1>
                {myDate}
            </h1>
        </div>

    );



}