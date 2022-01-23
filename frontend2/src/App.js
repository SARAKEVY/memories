
import './sass/main.css';
import React from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/account";
 import Item from "./components/item";
import ImageUpload from "./components/imageUpload";
import Signup from "./components/signup";
import ItemProperty from "./components/itemProperty";
import ReactHookFormDemo from "./components/login";
import Page404 from "./components/page404";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
 import Galery from "./components/galery";
 import Signup2 from "./components/signup2";

 import Home from './components/home';
import NavButtons from './components/navButtons';
import Header from "./components/header";
import './App.css';

function App() {

 

  

return (
    <React.Fragment>
      <header>
        <Header/>
        <NavButtons/>
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = "account" element={<Account/>}/>
          <Route path = "signup" element={<Signup/>} />
          <Route path = "item" element={<Item/>}/>
          <Route path = "imageUpload" element={<ImageUpload/>} />
          <Route path = "itemProperty" element={<ItemProperty/>} />
          <Route path = "login" element={<ReactHookFormDemo/>}/>
          <Route path = "galery" element={<Galery/>}/>]\
          <Route path = "signup2" element={<Signup2/>}/>
          <Route path = "page404" element={<Page404/>}/>
        </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )};

export default App;
