import React from 'react';
import { useEffect, useState } from 'react';
import userService from '../services/userService';
import { Link } from 'react-router-dom';

function UserAccount(props){

    const [accountsList, setAccountList] = useState([]);

    
    useEffect(() => {
       
       
        listAccount() 
     
    }, []);



    const listAccount = async ()=> {
        const userId = props.user._id;
        console.log("user-id", userId);
        try{
        const data  = await userService.getUserAccounts(userId);
       const myAccounts = data.data.userAccounts;
        setAccountList(myAccounts);
       console.log("my", myAccounts);
         
        }
        catch(ex){
            console.log('ex', ex);
        }
    }



    return(
        <React.Fragment>
            <div className="dropdown d-flex">
  <Link className="btn btn-secondary dropdown-toggle styleAccounts" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </Link>

   <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      {accountsList.map((item, i)=>
    (<li key = {i}><Link to="#" className="dropdown-item" >{item}</Link></li>)
    )}
    
  </ul> 
</div>
        </React.Fragment>
    );
}

export default UserAccount;