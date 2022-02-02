import React from 'react';
import LoginWithGoogle from "./googleLogin";
import {Link} from "react-router-dom";

function Home(props){

    const onDeleteUser = ()=> {
        console.log(props.user);
        localStorage.setItem('user', null);
        props.changeUser();
 
    }

   

    return(

       
        <div className="container div-home">
        
            <div className="container d-flex justify-content-center col-lg-6">
            <LoginWithGoogle className="btn-google-logout" changeUser={props.changeUser} user={props.user} />
           { !props.user ?
            <Link to="/newLogin" className="btn-primary col-lg-6 btnSignin text-center">Sign in </Link>
           :
            <button to="/newLogin" onClick={()=> onDeleteUser() }  className="btn-primary col-lg-6 btnSignin text-center">Logout </button>
           }
            </div>
        </div> 
    )
}

export default Home;