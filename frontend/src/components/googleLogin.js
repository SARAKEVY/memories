import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';
 
const clientId = "481632294387-umm3jhqq9qctmmg115sj0rkrc6arf6ki.apps.googleusercontent.com";
 
function LoginWithGoogle(props) {
 
  const [loading, setLoading] = useState('Loading...');
  
  const history = useNavigate();

  const handleLoginSuccess = async (response) => {
    console.log("Login Success ", response);
    
    const data = {
      name: response.profileObj.name,
      googleId: response.profileObj.googleId,
      email: response.profileObj.email,

    }
    console.log(data);
    
    try{
      await loginService.addWithGoogle (data)
    }
    catch(ex) {
        console.log(ex);
    }
   localStorage.setItem("user",  JSON.stringify(data));
   
    props.changeUser();
    setLoading();
    
   /*  history('/item'); */
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    localStorage.setItem("user", null);
    props.changeUser()
    
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
       
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
          className="btn-google-logout"
        />
       
      </div> :
        <GoogleLogin className="btn-google-login" 
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