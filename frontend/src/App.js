import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
import { ToastContainer } from 'react-toastify';
import Item from "./components/item";
import AddParticipants from "./components/addParticipants";
import Account from "./components/account";
import Signup from "./components/signup";
import Login from "./components/login";
import AccountValidation from "./components/accountValidation";
import Page404 from "./components/page404";
import userService from "./services/userService";
import accountService from "./services/accountService";
//import Galery from "./components/galery";
import NavBar from "./components/navbar";
import GoogleLogin from "./components/googleLogin";
import SideNav from "./components/sideNav";
import UserAccount from "./components/userAccount";
import Location from './components/location';
import ImageT from './components/imageTable';
import Home from './components/home';
import NavButtons from './components/navButtons';
import Header from "./components/header";
import NewLogin from "./components/signup";
import TimeLine from './components/timeLine';
import AccountLogin from "./components/accountLogin";
import NavBar3 from './components/navbar3';
import JoinAccount from "./components/joinAccount";
import 'react-toastify/dist/ReactToastify.css';
import './sass/main.css';
import './App.css';


function App() {

  const [ user, setUser] = useState('');
  const [ account, setAcconut] = useState('');
  
  
  useEffect(() =>{
    updateUser();
    updateAccount();
  },[]); 

  



   function updateUser() {
   const myUser = userService.getCurrentUser();
   setUser(myUser);
   console.log(myUser);
   
  
    } 
  
    function updateAccount(){
      const cAccount = accountService.getCurrentAccount();
      setAcconut(cAccount);
     console.log("account:" ,cAccount);
    }

return (
  
  
    <React.Fragment>
      <header>
        <Header updateUser={updateUser} user={user} updateAccount={updateAccount} account={account}/>
        <ToastContainer/>
     
      </header>
    
      <main>

        <Routes>
          <Route path = '/home' element={<Home updateUser={updateUser} user={user}/>}/>
          <Route path = "sideNav" element={<SideNav/>}/>
          <Route path = "account" element={<Account/>}/>
          <Route path = "navbar3" element={<NavBar3/>}/>
          <Route path = "accountValidation" element={<AccountValidation/>}/>
          <Route path = "signup" element={<Signup/>}/>
          <Route path = "item" element={<Item updateAccount={updateAccount}/> }/>
          <Route path = "location" element={<Location/>}/>
          <Route path = "login" element={<Login updateUser={updateUser} user={user}/>}/>
          <Route path = "newLogin" element={<NewLogin updateUser={updateUser}/>}/>
          <Route path = "UserAccount" element={<UserAccount user={user}/>}/>
          <Route path = "page404" element={<Page404/>}/>
          <Route path = "navBar" element={<NavBar updateUser={updateUser} user={user} updateAccount={updateAccount} account={account} />}/>
          <Route path = "accountLogin" element={<AccountLogin/>}/>
          <Route path = "joinAccount" element={<JoinAccount updateAccount={updateAccount} user={user} account={account}/>}/>
          <Route path = "addParticipants/:id" element={<AddParticipants/>}/>
          <Route path ="openAccount" element = {<Account/>}/>
          <Route path = "timel" element={<TimeLine/>}/>  
          <Route path = "t" element={<ImageT/>}/>  
          <Route path = "navButtons" element={<NavButtons/>}/>
          <Route path ="googleLogin" element={<GoogleLogin updateUser={updateUser} user={user}/>}/>
         
         </Routes> 
      
      </main>
    </React.Fragment>
    
    
  )};

export default App;



