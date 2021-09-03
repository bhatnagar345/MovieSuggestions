import React, { useState,useEffect } from 'react';
import './login.css'
import Popup from 'reactjs-popup';
import Header from '../header/Header';

import '../header/header.css';


const ControlledPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () =>{ 
    
    
    setOpen(false);
  }
  const cleModal =()=>{
    if(document.getElementById('log1')){
      document.getElementById('log1').style.display='none';
      
  
       }
       if(document.getElementById('logout')){
        document.getElementById('logout').style.display='block';
        
        }
    setOpen(false);
  }
  
  const cont =()=>{
    setOpen(o => !o);
  }
  <Header cont = {cont}/>

  return (
    <div>
      
      <li className="heading mini" id ="log1" > <a style={{cursor:"pointer"}} onClick={() => setOpen(o => !o)} >Log in</a></li>
      <Popup  open={open} closeOnDocumentClick onClose={closeModal} style={{border: "20px"}}>
        {/* <div className="modal">
          <a className="close" onClick={closeModal}>
          <i class="fas fa-window-close"></i>
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
          ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
          doloribus. Odit, aut.
        </div> */}
        <div class="login">   
        <a className="close1" onClick={closeModal}>
          <i class="fas fa-window-close"></i>
          </a> 
    <form id="login" method="get" action="login.php">    
        <label><b>User Name :  &nbsp;&nbsp;   
        </b>    
        </label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
        <br/><br/>    
        <label><b>Password : &nbsp; &nbsp; &nbsp;    
        </b>    
        </label>    
        <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
        <br/><br/>    
        <input type="button" name="log" id="log" value="Login" onClick={cleModal}/>       
        <br/><br/>    
        <input type="checkbox" id="check"/>    
        <span>Remember me</span>    
         
    </form>     
</div>    
      </Popup>
    </div>
  );
};
export default ControlledPopup;


{/* <NavLink exact to="" onClick={() => setOpen(o => !o)} >Contact</NavLink> */}