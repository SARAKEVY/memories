import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import Item from "./components/item";
import Account from "./components/account";
import Signup from "./components/signup";
import ReactHookFormDemo from "./components/login";
import Page404 from "./components/page404";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
//import Galery from "./components/galery";
import SideNav from "./components/sideNav";
import Signup2 from "./components/signup2";
import Home from './components/home';
import NavButtons from './components/navButtons';
import Header from "./components/header";
import NewLogin from "./components/newLogin";
import TimeLine from './components/timeLine';
import './sass/main.css';
import './App.css';

import Location from './components/location';
import ImageT from './components/imageTable';

function App() {

  const [ user, setUser] = useState();
  
  
  useEffect(() =>{
    changeUser()
  },[]); 





   function changeUser() {
   const myUser = JSON.parse(localStorage.getItem('user'));
   setUser(myUser);
   console.log(myUser);
   
  
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
          <Route path = "signup" element={<Signup/>} />
          <Route path = "item" element={<Item/>}/>
          <Route path = "location" element={<Location/>}/>
          <Route path = "login" element={<ReactHookFormDemo/>}/>
          <Route path = "newLogin" element={<NewLogin changeUser={changeUser}/>}/>
          <Route path = "signup2" element={<Signup2/>}/>
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



