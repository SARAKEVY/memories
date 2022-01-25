import React from 'react';
import { Link } from "react-router-dom";

function NavButtons(props){

    /* let history = useHistory(); */


    return(
        <div className="container d-flex m-3 col-lg-2">
            
            <div className="container col-lg-6">
            <i className="fas fa-chevron-down" style={{color:"rgb(33, 177, 177)"}}></i>
            <button className="bShAcconuts2"><i className="far fa-user"></i></button>
            </div>
            <div>
            <Link to="/account"className="btn bShAcconuts">+Add Account</Link>
            </div>
            <div>

            </div>
           
          
            
        </div> 
        
    )
}
export default NavButtons;