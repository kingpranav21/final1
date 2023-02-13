import React from "react";
import "./Bollywood.css";
import I2 from "../images/download.jpg";
import Card2 from  "./HomeComp/picText";
import Card3 from "./HomeComp/smallPic";
import Image from "../images/card.jpg";
import h1 from "../images/h1.jpg";
import h2 from "../images/h2.jpeg";
import h3 from "../images/h3.jpg";
import h4 from "../images/h4.jpg";
import h5 from "../images/h5.jpg";
import h6 from "../images/h6.jpg";
import h7 from "../images/h7.jpg";
import h8 from "../images/h8.jpg";
import h9 from "../images/h9.jpg";
import h10 from "../images/h10.jpg";

function Hollywood(){
    return(
        <>
            <div className="bol-cont">
                <div className="bol-left ">
                    
                <div className="articles ">
                    <div className="left  ">
                    <p className="heading">Hollywood</p>
            <hr className="rule2"/>

                        <Card2 images={h1} heading="The Lord Of The Rings" content = "Great Movie"/>
                        <Card2 images={h2} heading="Tom Cruise Oblivion" content = "Great Movie"/>
                        <Card2 images={h3} heading="London Has Fallen" content = "Great Movie"/>
                        <Card2 images={h4} heading="Harry Potter" content = "Great Movie"/>
                        <Card2 images={h5} heading="The Maze Runner" content = "Great Movie"/>
                        <Card2 images={h6} heading="Gravity" content="Great Movie"/>
                        
                        
                    </div>
                    <div className="right ">
                        
                        <p className="heading"> Top Posts</p>
                        <hr className="rule1"/>
                        <div className="image2"><img src={h7}/></div>
                        <div className="newT ">
                            <div className="tex ">
                                <p className="tex-head">The Dark Night</p>
                                <p className="tex-foot">Travel <span>  / August 21 2017</span></p>
                                </div>
                            <div className="cnt ">1</div>
                        </div>
                        <Card3 count="2" image={h8} heading="Avtaar"/>
                        <Card3 count="3" image={h9} heading="Interstellar"/>
                        <Card3 count="4" image={h10} heading="Spider-Man No Way Home"/>
                        <div className="add bord">Advertisement</div>
                    </div>
            </div>

                </div>
                
            </div>
        </>
    );
}
export default Hollywood;
