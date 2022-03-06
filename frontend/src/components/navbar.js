import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar(props){

  useEffect(() => {
    
  },[])

  
  const [ user, setUser] = useState([])




    return(
        <div>
         <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to = "item"  className="navbar-brand" href="#"><p className='h2 dNavbar'>MEMORIES</p><span className='dNavbar h4' style={{color:"black"}}>your in: {props.account.accountName}</span></Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown dNavbar">
          <Link to = ""  className="nav-link dropdown-toggle dNavbar ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </Link >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to = "/account" /* updateAccount={props.updateAccount} */ className="dropdown-item dNavbar1" ><i className="fas fa-plus m-2"></i>Create </Link ></li>
            <li><Link to = "/joinAccount"  className="dropdown-item  dNavbar1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right m-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>Join</Link ></li>
            <li><Link to = "/editAccount" account={props.account} className="dropdown-item  dNavbar1" ><i className="fas fa-pen m-2"></i>Edit</Link ></li>
            <li><Link to = "/deleteAccount" account={props.account} user={props.user}className="dropdown-item  dNavbar1" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash3 m-1" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>Delete</Link ></li>
        <li><Link to = "addParticipants" account={props.account} className="dropdown-item  dNavbar1" ><i className="fa-solid fa-elevator"></i> Add participants</Link ></li>
         
          </ul>
        </li>
      
        <li className="nav-item dropdown">
          <Link to = ""  className="nav-link dropdown-toggle dNavbar ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Display options
          </Link >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to = "/timel"  className="dropdown-item dNavbar1">Time line</Link ></li>
            <li><Link to = "#"  className="dropdown-item dNavbar1">Date</Link ></li>
            <li><Link to = "/t" className="dropdown-item dNavbar1">Table</Link></li>
           
          </ul>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 dNavbar1 ms-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success dNavbar2" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>   
        </div> 
    )
}

export default NavBar