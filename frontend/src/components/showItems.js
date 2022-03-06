import React from 'react';
import { useEffect, useState } from 'react';
import itemService from '../services/itemService';


function ShowItems(props){

    useEffect(()=>{
        console.log(props.account);
    }, []);

const [items, setItems] = useState();

 async function getItems (){
    const data = await itemService.getAccountItems();
    console.log(data);
    setItems(data)
}

    return(
        <div>ShowItems work</div> 
    )
}

export default ShowItems;