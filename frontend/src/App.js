import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
import Item from "./components/item";
import Account from "./components/account";
import Account2 from "./components/account2";
import Signup from "./components/signup";
import Login from "./components/login";
import Page404 from "./components/page404";
import userService from "./services/userService";
//import Galery from "./components/galery";
import SideNav from "./components/sideNav";
import Location from './components/location';
import ImageT from './components/imageTable';
import Home from './components/home';
import NavButtons from './components/navButtons';
import Header from "./components/header";
import NewLogin from "./components/signup";
import TimeLine from './components/timeLine';
import './sass/main.css';
import './App.css';


function App() {

  const [ user, setUser] = useState();
  const [ acconut, setAcconut] = useState();
  
  
  useEffect(() =>{
    changeUser();
    updateAccount();
  },[]); 

  



   function changeUser() {
   const myUser = userService.getCurrentUser()
   setUser(myUser);
   console.log(myUser);
   
  
    } 
  
    function updateAccount(){
      const cAccount =JSON.parse(localStorage.getItem('account'));
      setAcconut(cAccount);
     console.log("account:" ,cAccount);
    }

return (
  
  
    <React.Fragment>
      <header>
        <Header changeUser={changeUser} user={user}/>

      </header>
    
      <main>

        <Routes>
          <Route path = '/home' element={<Home changeUser={changeUser} user={user}/>}/>
          <Route path = "sideNav" element={<SideNav/>}/>
          <Route path = "account" element={<Account/>}/>
          <Route path = "signup" element={<Signup/>}/>
          <Route path = "item" element={<Item updateAccount={updateAccount}/> }/>
          <Route path = "location" element={<Location/>}/>
          <Route path = "login" element={<Login changeUser={changeUser}/>}/>
          <Route path = "newLogin" element={<NewLogin changeUser={changeUser}/>}/>
          <Route path = "account2" element={<Account2/>}/>
          <Route path = "page404" element={<Page404/>}/>
         <Route path = "navButtons" element={<NavButtons/>}/>
            <Route path ="openAccount" element = {<Account/>}/>
            <Route path = "timel" element={<TimeLine/>}/>  
            <Route path = "t" element={<ImageT/>}/>  

          <Route path = "navButtons" element={<NavButtons/>}/>
          <Route path ="openAccount" element = {<Account/>}/>
          <Route path = "timel" element={<TimeLine/>}/>  
            {/* <Route path = "galery" element={<Galery/>}/>  */}
       
         </Routes> 
      
      </main>
    </React.Fragment>
    
    
  )};

export default App;



