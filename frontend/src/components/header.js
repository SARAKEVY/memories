import React from 'react';
import NavButtons from './navButtons';


function Header(props){

   


    return(
        <React.Fragment>
        <div className="container-fluid d-flex dHeader">
           
            <div className="col-lg-3">
                <div className="headerH1">Memories</div>
                <div className="hMemories">Memories, Events and Experiences</div>
               
            </div>


            <div className="col-lg-4 d-flex align-items-center">
            <form>
                    <div className="search1">
                        <input className="serchStyle" type="search" id="mySearch" name="q"
                        placeholder="Search the site..." size="30"/>
                        <button className="serchStyle1 text-center">Search</button>
                    </div>
            </form>
            </div>

            <div className="col-lg-2 projectName d-flex align-content-center flex-wrap justify-content-center">
                <div>project name</div>
            </div>

            

            <div className="col-lg-3 m-auto d-flex justify-content-between">
                <div className="navBtn d-flex col-lg-6"><div className=""><NavButtons changeUser={props.changeUser} user={props.user}/></div></div>
               

            <div className="avatareBtn col-lg-5">
              <div className="userAvatar d-flex justify-content-end">
                <div className="h3 align-items-center col-lg-6 errow d-flex justify-content-end"><i className="fas fa-chevron-down" style={{color:"dTurquoise"}}></i></div>
                <div className="userA m-1 h2"><i className="far fa-user"></i></div>
            </div>
           
            { props.user &&
            <div className="userName text-right">{props.user.name}</div>}
            </div> 
            </div>
           </div> 

           <div className="smallScreen d-flex  dHeader">
           <form className="col-lg-8">
                    <div className="search2">
                        <input className="serchStyle" type="search" id="mySearch" name="q"
                        placeholder="Search the site..." size="30"/>
                        <button className="serchStyle1 text-center">Search</button>
                    </div>
            </form>
           
           </div>
        </React.Fragment>
    )
}

export default Header