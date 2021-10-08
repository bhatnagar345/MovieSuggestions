import React from "react";
import Navbar from "../Navbar";
import Allmw from "./Allmw";
const Wcards = () => {
    
    const web = Allmw.filter((value) =>{
        return (value.what === "Web-Series");
    });
    return (
        web.map((val, index) => {
            return (
                <Navbar
                    key={index}
                    images={val.link}
                    title={val.title}
                    date={val.Date}
                    btao={val.what}
                    links = {val.Watch}
                   
                />
            )
        })
    )
}

export default Wcards;