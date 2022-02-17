import React, {useEffect} from 'react';
import NavButtons from './navButtons';
import {Link} from 'react-router-dom';
import NavBar from './navbar';


function Header( props ){

    

return(
        <React.Fragment>
        <div className="container-fluid d-flex dHeader">
            <div className=" col-lg-12 col-xl-10 d-flex align-items-center">
                <NavBar account={props.account}/>
            </div>

        <div className=" col-xl-2 d-flex justify-content-end btnNavHeader">
            <div className="col-xl-4"></div>
            <div className="avatareBtn col-2"><NavButtons updateUser={props.updateUser} user={props.user}/>
             </div>
               
              
              
            <div className="col-6" >
             <div className="userAvatar d-flex justify-content-end">
                  <Link to='/userAccount' className="linkAccounts avatareBtn h3 align-items-center col-lg-6 errow d-flex justify-content-end">
                <div><i className="fas fa-chevron-down linkAccounts avatareBtn "></i></div>
                <div className="userA m-1 h2"><i className="far fa-user linkAccounts avatareBtn "></i></div>
                </Link>
            </div>
           
            { props.user &&
            <Link to="/userAccount" className="userName text-right linkAccounts d-flex justify-content-end"><span className="avatareBtn">{props.user.name}</span></Link>}
            </div> 
           
           </div> 
           </div>  


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
           
            { props.user &&
            <Link to="/userAccount" className="userName text-right linkAccounts d-flex justify-content-end"><span className="btnHidden">{props.user.name}</span></Link>}
            </div> 
           
           </div> 

                </div>
        
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
           