import React from "react";
import "./smallPic.css";
import Images from "../../images/helllo.jpg";
function Card3(props){
    return(
        <>
            <hr/>
            <div className="c3-cont">
                <div className="c3-img "> <img src={props.image}/> </div>
                <div className="c3-text ">
                    <p className="tex-head">{props.heading}</p>
                    <p className="tex-foot">Travel <span>  / August 21 2017</span></p>
                </div>
                <div className="cnt ">{props.count}</div>
            </div>
        </>
    );
}

export default Card3;