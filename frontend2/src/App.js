import Account from "./components/account";
import './sass/main.css';
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Item from "./components/item";
//import Upload from "./components/upload";
//import Signup from "./components/signup";



function App() {
  return (
    
    
  <div className="App">
   
    <Account></Account>
<<<<<<< HEAD
    {/* <Signup></Signup>  */}
=======
    <Item></Item>
>>>>>>> 44476d99420e434f6b972bf00859b67a32ef5f3c
    {/* <Routes>
      <Route path = "/upload" component={Upload}/>
      <Route path = "/signup" component={Signup}/>
      <Route path = "/account" component={Account}/>
    </Routes> */}
  </div>
  
  )}

export default App;
