import React  from 'react';
import { NavLink } from 'react-router-dom';
import {useState, useEffect } from 'react';
import firebase from './firebase';

const Navbar = (props) => {
    // const number = props.id;
    const [blogs, setBlogs] = useState([]);
  
  const fetching = () => {
    let list = [];

    firebase.database().ref('hbsuggest').on("value", snapshot => {

      snapshot.forEach((snap, id) => {

        // var key = snap.key;
        var data = snap.val();
        list.push(data.tit);
        console.log(list);
      });
    });

    setBlogs(list);
    

  }

  useEffect(() => {

    fetching();
  },[]);

    const tit = props.title;
    const bta = props.btao;
    const img = props.images;
    const tim = new Date().toLocaleString();
    const watchs = props.links;
    
    const firebas = async ()=>{
        fetching();
        
        
        if(blogs.find(element => element === tit))
        {
            alert("Already in your Watchlist Check it out!!!")
        }
        else{
            await fetch("https://watching-e7ce4-default-rtdb.asia-southeast1.firebasedatabase.app/hbsuggest.json",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    tit,
                    bta,
                    img,
                    tim,
                    watchs,
                }),
            });
        }
       

       
       setBlogs([])
    }
 
    return (
        <>
        
        <div className = {`container ${props.btao}`} method="POST" >
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
              
                <NavLink exact to = {props.links} >Watch Now</NavLink>
              
                {/* <button onClick={firebas} >WatchList </button> */}
                <a  onClick={firebas}><i class="fas fa-plus" style={{fontSize:'10px'}}></i> WatchList</a>
            </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;

