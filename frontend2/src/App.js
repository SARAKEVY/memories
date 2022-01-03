import Account from "./components/account";
import './sass/main.css';
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
//import Upload from "./components/upload";
//import Signup from "./components/signup";



function App() {
  return (
    
    
  <div className="App">
   
    <Account></Account>
    {/* <Signup></Signup>  */}
    {/* <Routes>
      <Route path = "/upload" component={Upload}/>
      <Route path = "/signup" component={Signup}/>
      <Route path = "/account" component={Account}/>
    </Routes> */}
  </div>
  
  )}

export default App;
