import React from "react";
import "./Card5.css";
import I2 from "../../images/download.jpg";
import I1 from "../../images/person1.png";
function Card5 (props){
    return(
        <>
            <div className="c5-cont ">
                <p className="c5-p">Related Reads</p>
                <div className="c5-img"><img src={props.image}/></div>
                <h2>{props.heading}</h2>
                <div className="content-head ">
                    <div className="headd-img  c5 "><img src={I1}/></div>
                    <div className="headd-txt  c5-txt ">
                        <p>Dmitry Nozhenko</p>
                        <span>Jan 28 2019 - 10 min read</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card5;