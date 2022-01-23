import Account from "./components/account";
import './sass/main.css';
import React, { useState, useEffect} from "react";
import {
  BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/item";
import ImageUpload from "./components/imageUpload";
import Signup from "./components/signup";
import Header from "./components/header";
import ItemProperty from "./components/itemProperty";
import ReactHookFormDemo from "./components/login";
import Page404 from "./components/page404";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
import Galery from "./components/galery";
import SideNav from "./components/sideNav";
import Signup2 from "./components/signup2";
import NavButtons from './components/navButtons';
import Home from './components/home';
import './App.css';

function App() {
/* 
  const [ user, setUser] = useState();

  useEffect(() => {
      const myUser = JSON.parse(localStorage.getItem('user'));
      console.log(myUser);
      setUser(myUser);
      console.log("user",user);
      
  },[]); */

  

return (
    <React.Fragment>
      <header>
        <Header/>
       
      </header>
    
      <main>

        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = "item" element={<Item/>}/>
          <Route path = "sideNav" element={<SideNav/>}/>
          <Route path = "signup" element={<Signup/>} />
          <Route path = "account" element={<Account/>}/>
          <Route path = "imageUpload" element={<ImageUpload/>} />
          <Route path = "itemProperty" element={<ItemProperty/>} />
          <Route path = "login" element={<ReactHookFormDemo/>}/>
          <Route path = "signup2" element={<Signup2/>}/>
          <Route path = "page404" element={<Page404/>}/>
          <Route path = "galery" element={<Galery/>}/>
          <Route path = "navButtons" element={<NavButtons/>}/>
            <Route path ="openAccount" element = {<Account/>}/>
        </Routes> 
      
      </main>
    </React.Fragment>
    
    
  )};

export default App;
