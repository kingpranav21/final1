import React from "react";
import "./Home.css";
import Images from "../images/helllo.jpg";
import I2 from "../images/download.jpg";
import Card from "./HomeComp/picWithText";
import Card2 from  "./HomeComp/picText";
import Card3 from "./HomeComp/smallPic";
import Card4 from "./HomeComp/Card4";
import i1 from "../images/nature1.jpg";
import i2 from "../images/nature2.jpg";
import i3 from "../images/nature3.jpg";
import i4 from "../images/nature4.jpg";
import i5 from "../images/nature5.jpg";
import i6 from "../images/nature6.jpg";
import i7 from "../images/nature7.jpeg";
import i8 from "../images/nature8.jpg";
import i9 from "../images/nature9.jpg";
import i10 from "../images/nature10.jpg";
import i11 from "../images/nature11.jpg";

function Home(){
    return(
        <>
            <div className="cont ">
                <div className=" img-1 "><img src={Images}/> <div>Title of vertical gallery<br/><span>Travel / August 21 2020</span></div></div>    
                <div className=" img-2 "> <img src={I2}/> <div>The Sound cloud <br/>You loved is doomed<br/><br/> <span>Travel / August 21 2020</span> </div> </div>
                <div className=" img-3 "><img src={I2}/><div>The Sound cloud <br/>You loved is doomed<br/><br/> <span>Travel / August 21 2020</span> </div>     </div>
            </div>

            <p className="heading">The Latest</p>
            <hr className="rule"/>
            <div className="latest">
                <Card image={i1} heading="Loktak Lake, Manipur"/>
                <Card image={i2} heading="Nubra Valley, Ladakh"/>
                <Card image={i3} heading="Khajjiar, Himachal"/>
            </div>


            <p className="heading">Latest Articles</p>
            <hr className="rule"/>
            <div className="articles ">
                    <div className="left  ">
                        <Card2 images={i4} heading="Yumthang Valley, Sikkim"/>        
                        <Card2 images={i5} heading="Stok Kangri, Ladakh"/>
                        <Card2 images={i6} heading="Nubra Valley, Ladakh "/>
                        <Card2 images={i7} heading="Nohkalikai Falls, Cherrapunji"/>

                        <div className="left-img">
                            <div>
                                <h1>Title Of The vertical gallery</h1>
                                <p>Travel <span> / August 21 2017</span></p>
                                </div>
                        </div>
                    </div>
                    <div className="right ">
                        <div className="add bord">Advertisement</div>
                        <p className="heading"> Top Posts</p>
                        <hr className="rule1"/>
                        <div className="image2"><img src={i8}/></div>
                        <div className="newT ">
                            <div className="tex ">
                                <p className="tex-head">Nanda Devi, Uttarakhand</p>
                                <p className="tex-foot">Travel <span>  / August 21 2017</span></p>
                                </div>
                            <div className="cnt ">1</div>
                        </div>
                        <Card3 image={i9} heading="Drang Drung Glacier, Kargil" count="2" />
                        <Card3 count="3" image={i10} heading="Andaman And Nicobar Islands"/>
                        <Card3 count="4" image={i11} heading="Chandertal Lake, Himachal Pradesh "/>
                    </div>
            </div>

            <div className="latest-stories">
                <p className="heading">Latest Stories</p>
                <hr className="rule1"/>

                <div className="stories">
                    <Card4 heading="Valley Of Flowers, Uttaranchal "att="Tech"/>
                    <Card4 heading="Pangong Tso, Leh Ladakh " att="Style"/>
                    <Card4 heading="Lake Pichola, Udaipur" att ="Tech"/>
                </div>

            </div>
        </>
    );
}
export default Home;
