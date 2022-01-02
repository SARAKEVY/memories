import Account from "./components/account";
import './sass/main.css';
import "./App.css";
<<<<<<< HEAD
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Upload from "./components/upload";
import Signup from "./components/signup";
function App() {
  return (
    
    
  <div className="App">
    <Account></Account>
    {/* <Routes>
      <Route path = "/upload" component={Upload}/>
      <Route path = "/signup" component={Signup}/>
      <Route path = "/account" component={Account}/>
    </Routes> */}
  </div>
  
  )}
=======
import React,{useState} from "react";

import ImageUpload from "./components/imageUpload";
import Item from "./components/item";



function App() {
  return <div className="App">ברוכים הבאים לפרוייקט 
 <Item></Item>
  
 </div>;
}
>>>>>>> 39d939fdce0b1b594185df89c416e966fbf99692

export default App;
