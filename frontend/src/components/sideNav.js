import React from 'react';
import { Link } from "react-router-dom";
function SideNav(props){
    return(
        <div>
            <div className="sideNav nav flex-column mt-8">
                <Link to ="/item" className="nav-link active"><i class="fas fa-plus m-1"></i><i class="fas fa-image"></i></Link> 
                <Link to ="/item" className="nav-link"><i class="fas fa-pen m-1"></i><i class="fas fa-image"></i></Link> 
                <Link to ="/item" className="nav-link"><i class="fas fa-plus m-1"></i><i class="fas fa-images"></i></Link> 
                <Link to ="/item" className="nav-link"><i class="fas fa-calendar-alt"></i><i class="fas fa-image"></i></Link> 
                
            </div>
        </div> 
    )
}

export default SideNav;