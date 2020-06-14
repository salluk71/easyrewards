import React ,{useState}  from 'react';
const Header = ()=> {
    const toggleDropDown = useState(false);  
    const openDropDown = ()=> {    
        if(!toggleDropDown[0]){
            toggleDropDown[1](true);    
        }  else{
            toggleDropDown[1](false);    
        }            
    }   
    return (
       
        // Main Header start from Here
        <header>
            <div className="container">
                <div className="nav-profile-wrapper">
                    <nav>
                        <ul>
                            <li><i className="fa fa-dashboard"></i> Dashboard</li>
                            <li className="active"><i className="fa fa-desktop"></i> Website</li>
                            <li><i className="fa fa-pencil-square-o"></i> Templates</li>
                            <li><i className="fa fa-question"></i> Help</li>
                        </ul>
                    </nav>

                    <div className="user-profile">
                        <div className="profileImage">
                            <img src="https://joeschmoe.io/api/v1/salman" alt="salman" />
                        </div>
                        <div className="profileName">
                            Sandra T. <span onClick={openDropDown}><i className="fa fa-caret-down"></i></span>
                        </div>
                        <div className={toggleDropDown[0]? 'dropDown active': 'dropDown'} >
                            <a href="#"><i className="fa fa-gear"></i> Settings</a>                            
                            <a href="#"><i className="fa fa-key"></i> Change Password</a>
                            <a href="#"><i className="fa fa-sign-out"></i> Logout</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;