import React from "react";
import "./Card4.css";

function Card4(props){
    return(
        <>
            <div className="c4-cont ">
                <h1 className="c4-head">{props.heading}</h1>    
                <p className="c4-body">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places.</p>
                <p className="c4-foot">{props.att} <span> / August 21 2017</span></p>
            </div>
        </>
    );
}
export default Card4;