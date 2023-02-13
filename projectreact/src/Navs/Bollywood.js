import React, { useState } from "react";
import "./Bollywood.css";
import I2 from "../images/download.jpg";
import Card2 from  "./HomeComp/picText";
import Card3 from "./HomeComp/smallPic";
import Image from "../images/card.jpg";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import b5 from "../images/b5.jpg";
import b6 from "../images/b6.jpg";
import b7 from "../images/b7.jpg";
import b8 from "../images/b8.jpg";
import b9 from "../images/b9.jpg";
import b10 from "../images/b10.jpg";

function Bollywood(){
    return(
        <>
    

            <div className="bol-cont">
                <div className="bol-left ">
                    
                <div className="articles ">
                    <div className="left  ">
                    <p className="heading">Bollywood</p>
            <hr className="rule2"/>
                        <Card2 images={b1} heading="SOORYAVANSHI"/>
                        <Card2 images={b5} heading="ROCY HANDSOME"/>
                        <Card2 images={b7} heading="Welcome to New York"/>
                        <Card2 images={b8} heading="Dilwale"/>
                        <Card2 images={b9} heading="Rowdy Rathore"/>
                        <Card2 images={b10} heading="Pushpa"/>
                        
                        
                    </div>
                    <div className="right ">
                        
                        <p className="heading"> Top Posts</p>
                        <hr className="rule1"/>
                        <div className="image2"><img src={b4}/></div>
                        <div className="newT ">
                            <div className="tex ">
                                <p className="tex-head">Trending Bollywood Movies</p>
                                <p className="tex-foot">Travel <span>  / August 21 2017</span></p>
                                </div>
                            <div className="cnt ">1</div>
                        </div>
                        <Card3 count="2" image={b6} heading="Bedhadak"/>
                        <Card3 count="3" image={b2} heading="Kisi Ka Bhai Jan"/>
                        <Card3 count="4"  image = {b3} heading="Desi Boys"/>
                        <div className="add bord">Advertisement</div>
                    </div>
            </div>

                </div>
                
            </div>
        </>
    );
}
export default Bollywood;
