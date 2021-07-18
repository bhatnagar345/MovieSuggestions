import React, {  useState } from 'react';
import ToDolists from './ToDolists';
import './main.css';
// import Iform from './Iform';

import Cards from './Cards';


const Watchlist = () => {
   const ch = Cards;
    const [listname, setinputlist] = useState('');
    const [item, setitem] = useState([])
    


    const itemEvent = (event) => {
        event.preventDefault();
        setinputlist(event.target.value);
    };


    const listofitem = () => {
        
        if(listname === ""){
            alert('please write something');
        }
        else{
        setitem((olditems) => {
            return (
                [...olditems, listname]
                
            )
        })
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
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Hello Harsh !!</h1>
                    <br />
                    <div className ="alag">
                        <input type="text"
                            placeholder="ADD Your Fav Movies and Webseries or Any Comments"
                            onChange={itemEvent}
                            value={listname}
                            required
                        />
                        <button onClick={listofitem}> + </button>
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
                </div>
            </div>
            {/* <Iform/> */}
        </>
    )
};
export default Watchlist;