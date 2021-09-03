import React, {  useState} from 'react';
import ToDolists from './ToDolists';
import './main.css';




const Watchlist = (props) => {
//    const ch = Cards;
    const [listname, setinputlist] = useState('');
    const [item, setitem] = useState([]);
    


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
                    <h1 className="watchs" style={{ color: "#d3d31e",fontFamily: "'Baloo Bhai 2',cursive",fontWeight:"500"}}>List Your Favourite Movie/Web-Series</h1>
                    <br />
                    <div className ="alag">
                        <input type="text"
                            placeholder="ADD Your Fav Movies and Webseries or Any Comments"
                            onChange={itemEvent}
                            id ="alag"
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
                </div>
            </div>
            {/* <Iform/> */}
        </>
    )
};
export default Watchlist;