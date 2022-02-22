import React from 'react';
import { Link } from "react-router-dom";


function NavButtons(props){

    const onDeleteUser = async  () => {
        localStorage.removeItem("token");
        props.updateUser();
    }
    
 

    return(
        <div className="d-flex align-items-end m-auto">
            
            
            <div className="navBtn">
       
            { (!props.user) &&
            <Link to="/login"className="btn bShAcconuts">Login</Link> 
            }

            { props.user &&
            <button  onClick={()=>onDeleteUser()} className="btn bShAcconuts ">Logout</button>  
            }
           
            </div>
              

            <div>

            </div>
           
          
            
        </div> 
        
    )
}
export default NavButtons;

 