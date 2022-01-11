import Account from "./components/account";
import './sass/main.css';
import React from "react";
import {
  BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/item";
import ImageUpload from "./components/imageUpload";
import Signup from "./components/signup";
import ItemProperty from "./components/itemProperty";
//import FormikFormDemo from "./components/login";
import './App.css';
import Galery from "./components/galery";


function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path = "item" element={<Item/>}/>
        <Route path = "signup" element={<Signup/>} />
        <Route path = "account" element={<Account/>}/>
        <Route path = "galery" element={<Galery/>}/>
      </Routes> 
    </BrowserRouter>
  )};

export default App;
