import React from 'react';

function Header(props){
    return(
        <div className="container-fluid d-flex dHeader">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <h1>Memories</h1>
                <p className="hMemories">Memories, events and experiences</p>
            </div>
            <p className="col-lg-4 col-md-4 col-sm-4 text-center hUser">Hello User</p>
            <p className="col-lg-4 col-md-4 col-sm-4 hName h2">Project Name</p>
        </div> 
    )
}

export default Header