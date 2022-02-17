import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userService from "../services/userService";

function NavBar(props){

  useEffect(() => {
    getMyAccount()
  }, [])

  const [ myAccount, setMyAccount] = useState([])


const getMyAccount = async () =>{
const userId = props.user.id;
const myAccountList = await userService.getUserAccounts( userId);
setMyAccount(myAccountList.data.data)
console.log(myAccountList);
}
 



    return(
        <div>
         <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link to = "item"  className="navbar-brand" href="#"><p className='h2'>MEMORIES</p><span>{props.account.accountName}</span></Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link to = ""  className="nav-link dropdown-toggle m-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </Link >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to = "My Account"  className="dropdown-item" ><FontAwesomeIcon icon="fa-thin fa-circle-plus" /> My Account </Link >
              <ul></ul>
            </li>
            <li><Link to = "account"  className="dropdown-item" ><FontAwesomeIcon icon="fa-thin fa-circle-plus" /> Create </Link ></li>
            <li><Link to = "/joinAccount"  className="dropdown-item" ><i class="fa-thin fa-arrow-right-to-bracket"></i>Join</Link ></li>
            <li><Link to = ""  className="dropdown-item" ><i class="fal fa-edit"></i>Edit</Link ></li>
            <li><Link to = ""  className="dropdown-item" ><FontAwesomeIcon icon="fa-thin fa-trash-can" />Delete</Link ></li>
           
         
          </ul>
        </li>
      
        <li className="nav-item dropdown">
          <Link to = ""  className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Display options
          </Link >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to = ""  className="dropdown-item" href="#">time line</Link ></li>
            <li><Link to = ""  className="dropdown-item" href="#">date</Link ></li>
           
           
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>   
        </div> 
    )
}

export default NavBar