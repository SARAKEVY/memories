import Account from "./components/account";
import './sass/main.css';
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Item from "./components/item";
//import Upload from "./components/upload";
import Signup from "./components/signup";
import FormikFormDemo from "./components/login";



function App() {
  return (
    
    
  <div className="App">
    <FormikFormDemo></FormikFormDemo>
    <Account></Account>
    <Signup></Signup> 
    {/* <Routes>
      <Route path = "/upload" component={Upload}/>
      <Route path = "/signup" component={Signup}/>
      <Route path = "/account" component={Account}/>
    </Routes> */}
  </div>
  
  )}

export default App;
