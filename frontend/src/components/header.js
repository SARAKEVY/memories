import React, {useEffect, useState} from 'react';
import NavButtons from './navButtons';
import {Link, useSearchParams} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from './navbar';
import userService from "../services/userService";
import accountService from "../services/accountService";
import itemService from '../services/itemService';

function Header( props ){

useEffect(() => {
    getMyAccount();
},[])

    const [ myAccount, setMyAccount] = useState([]);
    
    const [ currentUserId, setCurrentUserId] = useState();

    const [searchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    function getId(){
        const user = localStorage.getItem("token");
        const currentUser = userService.getCurrentUser(user);
        const userId = currentUser._id;
        setCurrentUserId(userId);
        return userId;
}

    const getMyAccount =async () =>{
        console.log("hi");
        const userId = getId();
        console.log("hi",userId);
        const newAccountList = await userService.getUserAccounts( userId);
        setMyAccount(newAccountList.data)
        console.log("my", newAccountList.data);
        
       /*  nameAccountList(); */
        }
        

        async function accountItems (accountId){
         
            console.log(accountId);
            const data = await itemService.getAccountItems(accountId);
            setItems(data);
            console.log(data);
          }
    

        async function replaceAccount(accountId) {
            const account = await accountService.joinAccount(accountId);
            setMyAccount(account);
            props.updateAccount();
          }

 /* const nameAccount = (currentUserId) =>{
         accountService.getAccountsName(currentUserId);
      
    }
    const nameAccountList = ()=>{
        const newList = myAccountList.forEach( element => nameAccount(element) );
            console.log(newList); 
        }
     */

return(
        <React.Fragment>
        <div className="container-fluid d-flex dHeader">
            <div className="col-lg-8 d-flex align-items-center navSmall">
                <NavBar account={props.account} user={props.user} updateUser={props.updateUser} updateAccount={props.updateAccount}/>
            </div>



            <div className=" col-lg-4 d-flex justify-content-end btnNavHeader avatareBtn">
                <div className="col-lg-4"></div>
                <div className="avatareBtn col-lg-3">
                    <NavButtons updateUser={props.updateUser} user={props.user}/>
                </div>
               
              
              
                <div className="col-lg-5 btnNavHeader mt-2 avatareBtn" >
                    <li className="nav-item dropdown userName text-right linkAccounts d-flex justify-content-end">
                    { props.user &&
                    <Link to = "#"  className="nav-link dropdown-toggle text-center h3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-user linkAccounts avatareBtn dh"></i><br></br><span className="h5 dH avatareBtn">{props.user.name}</span></Link >}
                    { ! props.user &&  <Link to = "#" onClick={useEffect} className="nav-link text-center mt-3 h3 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-user linkAccounts avatareBtn"></i><br></br><span className="h5"></span></Link >}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">{myAccount.map((item ,i) => (
                            <li key={i}><Link to = "/showItems" account={myAccount} onClick ={ replaceAccount(item.accountId)} className="dropdown-item" href="#">{item.accountName}</Link ></li>
                            ))}
                
                            <li><Link to = ""  className="dropdown-item" href="#"></Link ></li>
                        </ul>
                    </li> 
                </div> 
           
            </div> 
        </div>  

        
 </React.Fragment>
    )
}

export default Header;




 
           