import React  from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    // const number = props.id;
   
    return (
        <>
        
        <div className = {`container ${props.btao}`}  >
            <div className = "images">
                <img src = {props.images} alt="rhne do"/>
            </div>
            <div className = "sec">
            <div className = "about">
                <h4> {props.title}</h4>
                <p> {props.btao} </p>
                <p> {props.date}</p>
            </div>
            <div className = "buttons">
              
                <a href = {props.links} target = "_blank" rel="noreferrer">Watch Now</a>
              
                <NavLink exact to="/watch"  >WatchList </NavLink>
            </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;

