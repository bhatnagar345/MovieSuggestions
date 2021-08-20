import React  from 'react';
import { NavLink } from 'react-router-dom';




const Navbar = (props) => {
    // const number = props.id;
    // const Watching = () =>{
    //     alert(`i m watching ${number} `);
    //     <Watchnow id = {number}/>;
    // };
    return (
        <>
        <div className = {`container ${props.btao}`}>
            <div className = "images">
                <img src = {props.images}/>
            </div>
            <div className = "sec">
            <div className = "about">
                <h4> {props.title}</h4>
                <p> {props.btao} </p>
                <p> {props.date}</p>
            </div>
            <div className = "buttons">
              
                <a href = {props.links} target = "_blank">Watch Now</a>
                {/* <a href = "/watch" >Wacthlist</a> */}
                <NavLink exact to="/watch"  >WatchList </NavLink>
            </div> 
            </div>
        </div>
        </>
    )
}

export default Navbar;
