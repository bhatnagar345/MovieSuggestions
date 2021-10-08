import React, { useState, useEffect } from 'react';
import ToDolists from './ToDolists';
import './main.css';



import firebase from '../firebase';


const Watchlist = (props) => {
    //    const ch = Cards;
    const [listname, setinputlist] = useState('');
    const [item, setitem] = useState([]);
    const [blogs, setBlogs] = useState(props.blog);
    
    useEffect(() => {
        
        fetching();
    },[]);
    
    const fetching = async () => {
        let list = [];
        firebase.database().ref('hbsuggest').on("value", snapshot => {  
            
            snapshot.forEach((snap,id) => {
              
               var key = snap.key;
               var data = snap.val();
                list.push({key: key, tit: data.tit,img: data.img, tim: data.tim , watchs : data.watchs}); 
                         
            });       
        });
        setBlogs(list);
       
    }
    
   
    
   
//    useEffect(() => {
//     setless(blogs);
    
//    },1000)
    
   
    
    

    const itemEvent = (event) => {
        event.preventDefault();
        setinputlist(event.target.value);
        
    };



    const listofitem = () => {

        if (listname === "") {
            alert('please write something');
        }
        else {
            setitem((olditems) => {
                return (
                    [...olditems, listname]

                )
            })
            alert('Your Suggestion has been delivered this msg will be deleted after you change the page')
        }
        setinputlist('');
    };


    const ondelete = (id) => {
        setitem((olditem) => {
            return (
                olditem.filter((elem, index) => {
                    return index !== id;
                })
            )
        })
    };
    const listdel = (title) =>{
        firebase.database().ref("hbsuggest").child(title).remove();
        fetching();
        
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1 className="watchs" style={{ color: "#d3d31e", fontFamily: "'Baloo Bhai 2',cursive", fontWeight: "500" }}>List Your Favourite Movie/Web-Series</h1>
                    <br />
                    <div className="alag">
                        <input type="text"
                            placeholder="Suggest us Your Fav Movies/Web-Series"
                            onChange={itemEvent}
                            id="alag"
                            value={listname}
                            required
                        />
                        <button onKeyUpCapture={listofitem} onClick={listofitem} > + </button>
                        {/* { < Navbar go = {listofitem}/>} */}


                    </div>
                    <ol>

                        {item.map((itemval, index) => {
                            return <ToDolists
                                key={index}
                                id={index}
                                onselect={ondelete}
                                itemval={itemval} />
                        })}

                    </ol>
                    <ol>
                        {
                            blogs && blogs.map((elem,index) => {
                                return (
                                    <>
                                        <div className="todo-style">

                                            <li>
                                             <i className="fas fa-window-close" onClick={()=>{listdel(elem.key)}}></i>
                                             
                                              <img src={elem.img} alt="htao" width="50px" height="50px"  /> 
                                            {elem.tit} 
                                            {/* <a href={elem.watchs}>watch now</a> */}
                                            <p>( {elem.tim} )</p> 
                                            </li>
                                        </div>
                                    </>
                                )
                            }) 
                        }
                    </ol>
                </div>
            </div>
            {/* <Iform/> */}
        </>
    )
};
export default Watchlist;