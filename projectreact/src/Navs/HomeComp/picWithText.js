import React from "react";
import "./picWithText.css";
import Image from "../../images/card.jpg";
function picWithText(props){
    return(
        <>  
            <div className=" card">
                <div className="imag "> <img src={props.image}/></div>
                <div className=" text">
                    <p className="h11">{props.heading}</p>
                    <p className="h22">Gujarat is vastly underrated and it's mystery to us why the region isn't more well-known as a tourist destination.It has a plethora of temples and palaces</p>
                    <p className="h33">Travel <span>/ August 21 2017</span> </p>
                </div> 
            </div>
        </>
    );
}

export default picWithText;