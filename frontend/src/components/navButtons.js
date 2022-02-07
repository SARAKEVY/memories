import React from 'react';
import { Link } from "react-router-dom";

function NavButtons(props){

  
    
 

    return(
        <div className="d-flex align-items-end">
            
            
            <div className="navBtn">
            { (!props.user) &&
            <Link to="/home"className="btn bShAcconuts">Login</Link> 
            }

            { props.user &&
            <Link to="/home"  className="btn bShAcconuts btnLogout ">Logout</Link>  
            }
           
           <Link to="/account"  className="btn bShAcconuts2 btnLogout ">+Add Account</Link>

            </div>
            <div>

            </div>
           
          
            
        </div> 
        
    )
}
export default NavButtons;

 