import React, {useEffect, useState} from 'react';
import NavButtons from './navButtons';
import {Link} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavBar from './navbar';
import userService from "../services/userService";
import accountService from "../services/accountService";

function Header( props ){

useEffect(() => {
    getMyAccount();
},[])

    const [ myAccount, setMyAccount] = useState([]);
    
    const [ currentUserId, setCurrentUserId] = useState();

    function getId(){
        const user = localStorage.getItem("token");
        const currentUser = userService.getCurrentUser(user);
        const userId = currentUser._id;
        setCurrentUserId(userId);
        return userId;
}

    const getMyAccount = async () =>{
        const userId = getId();
        console.log("hi",userId);
        const newAccountList = await userService.getUserAccounts( userId);
        setMyAccount(newAccountList.data)
        console.log("my", newAccountList.data);
        console.log("my", newAccountList.data.accountName);
       /*  nameAccountList(); */
        }
        
 /*    const nameAccount = (currentUserId) =>{
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
            <div className=" col-lg-12 col-xl-10 d-flex align-items-center">
                <NavBar account={props.account} user={props.user}/>
            </div>

        <div className=" col-xl-2 d-flex justify-content-end btnNavHeader">
            <div className="col-xl-4"></div>
            <div className="avatareBtn col-2"><NavButtons updateUser={props.updateUser} user={props.user}/>
             </div>
               
              
              
            <div className="col-6" >
           
        <li className="nav-item dropdown userName text-right linkAccounts d-flex justify-content-end">
        { props.user &&
          <Link to = "#"  className="nav-link dropdown-toggle text-center h3 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <i className="far fa-user linkAccounts avatareBtn"></i><br></br><span className="h5">{props.user.name}</span></Link >}
        { !props.user &&  <Link to = "#" onClick={() => useEffect} className="nav-link text-center mt-3 h3 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <i className="far fa-user linkAccounts avatareBtn"></i><br></br><span className="h5"></span></Link >}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">{myAccount.map((item ,i) => (
                 <li key={i}><Link to = "item" className="dropdown-item" href="#">{item.accountName}</Link ></li>
          ))}
         
            <li><Link to = ""  className="dropdown-item" href="#">date</Link ></li>
        </ul>
        </li> 
            
      
            </div> 
           
           </div> 
           </div>  

{/* { props.user &&
            <Link to="/userAccount" className="userName text-right linkAccounts d-flex justify-content-end"><span className="avatareBtn">{props.user.name}</span></Link>} */}
{/* 
            <div className="d-flex justify-content-end col-xs-12">
                <div className="col-xs-2"></div>
                <div className="col-xs-4 d-flex justify-content-end btnNavHeader btnHidden">
          
            <div className="mt-3 col-xs-6 btnHidden "><NavButtons updateUser={props.updateUser} user={props.user}/>
             </div>
               
              
              
            <div className="col-6" >
             <div className="userAvatar d-flex justify-content-end">
                  <Link to='/userAccount' className="linkAccounts  h3 align-items-center col-lg-6 errow d-flex justify-content-end">
                <div><i className="fas fa-chevron-down linkAccounts btnHidden "></i></div>
                <div className="userA m-1 h2"><i className="far fa-user linkAccounts avatareBtn "></i></div>
                </Link>
            </div>
            </div> 
            </div> 

                
            
              
        
        </div>
           
           */}
        
 </React.Fragment>
    )
}

export default Header;




  {/*  <form className="col-lg-8">
                    <div className="search2">
                        <input className="serchStyle" type="search" id="mySearch" name="q"
                        placeholder="Search the site..." size="30"/>
                        <button className="serchStyle1 text-center">Search</button>
                    </div>
            </form> */}
           