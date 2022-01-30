import React from 'react';
import LoginWithGoogle from "./googleLogin";
import {Link} from "react-router-dom";

function Home(props){

   

   

    return(

       
        <div className="container div-home">
        
            <div className="container d-flex justify-content-center col-lg-6">
            <LoginWithGoogle changeUser={props.changeUser} />
           
            <Link to="/newLogin" className="btn-primary col-lg-6 btn-signin text-center">Sign in </Link>
            </div>
        </div> 
    )
}

export default Home;