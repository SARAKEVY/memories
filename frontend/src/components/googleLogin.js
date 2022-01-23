import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
 
const clientId = "481632294387-umm3jhqq9qctmmg115sj0rkrc6arf6ki.apps.googleusercontent.com";
 
function LoginWithGoogle() {
 
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState([]);
 

  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    const user = response.profileObj;
    localStorage.setItem("user",  JSON.stringify(user));
    setLoading();
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
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
      
      {user ? <div>
        <div className="name">Welcome {user.name}!</div>
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
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