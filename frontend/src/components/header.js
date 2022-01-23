import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
function Header(props){

    const [ user, setUser] = useState();

  useEffect(() => {
      const myUser = JSON.parse(localStorage.getItem('user'));
      console.log(myUser);
      setUser(myUser);
      console.log("user",user);
      
  },[]);
 

    

    return(

        <div className="container-fluid d-flex dHeader">
           
            <div className="col">
                <div className="headerH1">Memories</div>
                <div className="hMemories">Memories, Events and Experiences</div>
            </div>

            <div className="col projectName d-flex align-content-center flex-wrap justify-content-center">
                <div>project name</div>
            </div>

            

            <div className="col m-auto ">
                
                <div className="userAvatar d-flex justify-content-end">
                <div className="h3 align-items-center col-lg-6 errow d-flex justify-content-end"><i className="fas fa-chevron-down" style={{color:"rgb(33, 177, 177)"}}></i></div>
                <div className="userA m-1 h2"><i className="far fa-user"></i></div>
            </div>
            <div className="userName">user</div>
            </div>

            {/* <div className="col-lg-4">
                <h1 className="headerH1">Memories</h1>
                <p className="hMemories">Memories, events and experiences</p>
            </div>
            <p className="col-lg-4 col-md-4 col-sm-4 text-center hUser">projectName</p>
            <div className="col-lg-4 hName h2"><i className="fas fa-chevron-down" style={{color:"rgb(33, 177, 177)"}}></i>
            <button className="bShAcconuts2"><i className="far fa-user"></i></button>
            <p className="hName">hello user</p>
            </div> */}
            
        </div> 
    )
}

export default Header