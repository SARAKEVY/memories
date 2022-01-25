

import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";

import Item from "./components/item";
import Account from "./components/account";
import ImageUpload from "./components/imageUpload";
import Signup from "./components/signup";
import ItemProperty from "./components/itemProperty";
import ReactHookFormDemo from "./components/login";
import Page404 from "./components/page404";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";        
import 'primeflex/primeflex.css';
// import Galery from "./components/galery";
import SideNav from "./components/sideNav";
import Signup2 from "./components/signup2";
import Home from './components/home';
import NavButtons from './components/navButtons';
import Header from "./components/header";
import { useNavigate } from 'react-router-dom';
import './App.css';
import TimeLine from './components/timeLine';

function App() {

  const [ user, setUser] = useState([]);
  
  const history = useNavigate();
  
  
  const changeUser= ()=>{
   const myUser = JSON.parse(localStorage.getItem('user'));
   if (myUser !== user)
    setUser(myUser);
    if ( myUser === undefined ){
     history('/home')
    }
  }
  

return (
  
  
    <React.Fragment>

      
      <header>
        
        <Header changeUser={changeUser} user={user}/>

      </header>
    
      <main>

        <Routes>
          <Route path = '/' element={<Home changeUser={changeUser} user={user}/>}/>
          <Route path = "sideNav" element={<SideNav/>}/>
          <Route path = "account" element={<Account/>}/>
          <Route path = "signup" element={<Signup/>} />
          <Route path = "item" element={<Item/>}/>
          <Route path = "imageUpload" element={<ImageUpload/>} />
          <Route path = "itemProperty" element={<ItemProperty/>} />
          <Route path = "login" element={<ReactHookFormDemo/>}/>
          <Route path = "signup2" element={<Signup2/>}/>
          <Route path = "page404" element={<Page404/>}/>
         <Route path = "navButtons" element={<NavButtons/>}/>
            <Route path ="openAccount" element = {<Account/>}/>
            <Route path = "timel" element={<TimeLine/>}/>  
            {/* <Route path = "galery" element={<Galery/>}/>  */}
       
         </Routes> 
      
      </main>
    </React.Fragment>
    
    
  )};

export default App;
