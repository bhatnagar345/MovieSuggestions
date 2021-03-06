import React from 'react'
import './header.css';
import Contact from '../login/Contact';
import { NavLink } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
// import PopupExample from './Contact2';
const Header = () => {
    //  const logout = ()=>{
    //     if(document.getElementById('log1')){
    //         document.getElementById('log1').style.display='block';
    //         document.getElementById('second-header').style.display ='none';
    //         }
        
    //  }

    return (
        <>
            <div className="header">
                <div className="head_content">
                    <div className="head_first">
                        <NavLink exact to="/" className="logo">
                            <img src="https://pbs.twimg.com/profile_images/724327604862361600/vPFH0rEV_400x400.jpg" alt="tittle" width="50" height="40" />
                        </NavLink>
                        <ul className="first_list">
                            <li className="heading"><NavLink exact to="/">Home</NavLink></li>
                            <li className="heading"><NavLink exact to="/watch">Watch List</NavLink></li>
                            {/* <li className="heading"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N4RYn_BXJYlKAE3CjvyiFBo0MC9jhddfbw&usqp=CAU" alt="okks" width="30" height="30" style={{borderRadius:"50%"}} /></li> */}    
                            {/* <Contact /> */}
                        </ul>
                    </div>
                    <div className="second"  id="second-header">
                    {/* <ul className="first_list">
                    <div className="head_first" >
                        <PopupExample />
                        <div className="dropdown1">
                            <button className="dropbtn1"><li className="heading mini" id="profil"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIZBqzmpPq38JvohUlgc_EMub1iAMf8RTQQ&usqp=CAU" alt="okk" width="25" height="25" style={{borderRadius:"50%",marginTop:"5px"}} /></li> </button>
                            <div className="dropdown-content1">
                                <NavLink exact to="/" id="logout" onClick ={logout}>Log Out</NavLink>

                            </div>
                        </div>
                    </div>
                    </ul> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header;