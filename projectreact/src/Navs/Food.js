import React from "react";
import "./Bollywood.css";
import I2 from "../images/download.jpg";
import Card2 from  "./HomeComp/picText";
import Card3 from "./HomeComp/smallPic";
import I3 from "../images/food.jpg";
import fo1 from "../images/fo1.jpg";
import fo2 from "../images/fo2.jpg";
import fo3 from "../images/fo3.jpg";
import fo4 from "../images/fo4.jpg";
import fo5 from "../images/fo5.jpg";
import fo6 from "../images/fo6.jpg";
import fo7 from "../images/fo7.jpg";
import fo8 from "../images/fo8.jpg";
import fo9 from "../images/fo9.jpg";
import fo10 from "../images/fo10.jpg";
function Food(){
    return(
        <>
         <div className="bol-cont">
                <div className="bol-left ">
                    
                <div className="articles ">
                    <div className="left  ">
                    <p className="heading">Food</p>
            <hr className="rule2"/>
                        <Card2 images={fo1} heading="Butter Chicken" />
                        <Card2 images={fo2} heading="Samosa" />
                        <Card2 images={fo3} heading="Biryani" />
                        <Card2 images={fo4} heading="Dosa" />
                        <Card2 images={fo5} heading="Chole Bhature" />
                        <Card2 images={fo6} heading="Dhokla" />
                        
                        
                    </div>
                    <div className="right ">
                        
                        <p className="heading"> Top Posts</p>
                        <hr className="rule1"/>
                        <div className="image2"><img src={fo7}/></div>
                        <div className="newT ">
                            <div className="tex ">
                                <p className="tex-head">Gajar ka Halwa</p>
                                <p className="tex-foot">Travel <span>  / August 21 2017</span></p>
                                </div>
                            <div className="cnt ">1</div>
                        </div>
                        <Card3 count="2" image={fo8} heading="Gulab Jamun"/>
                        <Card3 count="3" image={fo9} heading="Dal Makhni"/>
                        <Card3 count="4" image={fo10} heading="Idli Sambar"/>
                        <div className="add bord">Advertisement</div>
                    </div>
            </div>

                </div>
                
            </div>

        </>
    );
}
export default Food;