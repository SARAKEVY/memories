import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import UserService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'; 

const clientId = "481632294387-umm3jhqq9qctmmg115sj0rkrc6arf6ki.apps.googleusercontent.com";
 
function LoginWithGoogle(props) {
 
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState('');
  const history = useNavigate();

useEffect(() => {
  const newUser = props.user;
  setUser(newUser);
}, [])


  const handleLoginSuccess = async (response) => {
    console.log("Login Success ", response);
    
    const data = {
      name: response.profileObj.name,
      password: "nechamiF1234",
      email: response.profileObj.email,

    }
    console.log(data);
    
    try{
      await UserService.addUser (data);
      const authData = {
        password: "nechamiF1234",
        email: response.profileObj.email,
      }
      await UserService.login(authData);
     
      props.updateUser();
      toast.success('login success!')
        window.location = '/item';
    }
    catch(ex) {
        console.log(ex);
    }
   /* localStorage.setItem("user",  JSON.stringify(data));
   
    props.updateUser();
    setLoading(); */
    
   /*  history('/item'); */
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  

  const handleLogoutSuccess = async (user) => {
    console.log(user);
    const id = props.user.id;
    localStorage.removeItem("token");
    setUser('');
    props.updateUser();
    console.log("id", id);
    await UserService.deleteUser(id);
    console.log("user delete");
}
    
  
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }
 
  

  return (
    <div>
      
      {props.user ? <div>
       
        <GoogleLogout className="btn-google" 
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
          user={props.user}
        />
       
      </div> :
        <GoogleLogin className="btn-google" 
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        

        />}
    </div>
  );
}
 
export default LoginWithGoogle;