import React from "react";
import Allmw from "./Allmw";
import Navbar from "./Navbar";

const Cards = () => {
    
    const Carr = Allmw;
    return (
        Carr.map((val, index) => {
            return (<>
                <Navbar
                    key={index}
                    images={val.link}
                    title={val.title}
                    date={val.Date}
                    btao={val.what}
                    links={val.Watch}
                />

            </>
            )
        })
    )
};

export default Cards;