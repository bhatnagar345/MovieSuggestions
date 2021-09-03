import React from 'react';

const ToDolists = (props) =>{
    return (
        <>
        <div className = "todo-style">
        
        <li> <i className="fas fa-window-close"  onClick = {()=>{
            props.onselect(props.id)
        }}></i> {props.itemval}</li>
        </div>
        </>
    );
};


export default ToDolists;