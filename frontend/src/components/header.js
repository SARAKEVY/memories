import React, {useEffect} from 'react';
function Header(props){

    


    useEffect(() => {
        props.changeUser()
    }, []);



    return(

        <div className="container-fluid d-flex dHeader">
           
            <div className="col">
                <div className="headerH1">Memories</div>
                <div className="hMemories">Memories, Events and Experiences</div>
            </div>

            <div className="col projectName d-flex align-content-center flex-wrap justify-content-center">
                <div>project name</div>
            </div>

            

            <div className="col m-auto ">
                
                <div className="userAvatar d-flex justify-content-end">
                <div className="h3 align-items-center col-lg-6 errow d-flex justify-content-end"><i className="fas fa-chevron-down" style={{color:"rgb(33, 177, 177)"}}></i></div>
                <div className="userA m-1 h2"><i className="far fa-user"></i></div>
            </div>
            { props.user &&
            <div className="userName">{props.user.name}</div>}
            </div>

          
            
        </div> 
    )
}

export default Header