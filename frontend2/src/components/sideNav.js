import React from 'react';

function SideNav(props){
    return(
        <div>
            <div className="sideNav nav flex-column">
                <a href ="/item" className="nav-link active"><i class="fas fa-plus m-1"></i><i class="fas fa-image"></i></a>
                <a href ="/item" className="nav-link"><i class="fas fa-pen m-1 fi"></i><i class="fas fa-image"></i></a>
                <a href ="/item" className="nav-link"><i class="fas fa-plus m-1"></i><i class="fas fa-images"></i></a>
                <a href ="/item" className="nav-link"><i class="fas fa-calendar-alt"></i><i class="fas fa-image"></i></a>
                
            </div>
        </div> 
    )
}

export default SideNav;