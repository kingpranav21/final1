import React from "react";
import "./Technology.css";
import I1 from "../images/person1.png";
import I2 from "../images/logos3.jpg";
import I3 from "../images/react1.png";
import I4 from "../images/code1.png";  
import Card5 from "./HomeComp/Card5"; 
import I5 from "../images/clap.png";
import I6 from "../images/share2.png";
import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import f4 from "../images/f4.jpg";
import f5 from "../images/f5.jpg";
function Fitness(){
    return(
        <>
        <div className="tech-cont ">
        <div className="share  ">
            <div className="share-1"> 
                <img src={I5}/> <span> 9.3K</span> <br/> <br/>
                <img src={I6}/><span>Share this article</span>
            </div>
        </div>
        <div className="tec-content ">
            <h2>Get a Jump on Your Day</h2>
            <div className="content-head">
                <div className="headd-img "><img src={I1}/></div>
                <div className="headd-txt ">
                    <p>Dmitry Nozhenko</p>
                    <span>Jan 28 2019 - 10 min read</span>
                </div>
                <div className="headd-fav "><img src={I2}/></div>
            </div>
            <div className="tec-img1"><img src={f1}/></div>

            <div className="tec-txt2"> 
            Fitness is defined as the quality or state of being fit and healthy.[5] Around 1950, perhaps consistent with the Industrial Revolution and the treatise of World War II, the term "fitness" increased in western vernacular by a factor of ten.[6] The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations. This has led to an interrelation of human fitness and physical attractiveness that has mobilized global fitness and fitness equipment industries. Regarding specific function, fitness is attributed to persons who possess significant aerobic or anaerobic ability (i.e., endurance or strength).
<br/><br/><br/>
<b> Lets talk about them.</b>   
            </div>
            <div className="tec-img2"><img src={f2}/></div>

            <button>React</button>
            <button>Javascript</button>
            <button>Animation</button>

            <hr/>
            <div className="content-head">
                <div className="headd-img "><img src={I1}/></div>
                <div className="headd-txt ">
                    <p>Dmitry Nozhenko</p>
                    <span>Jan 28 2019 - 10 min read</span>
                </div>
            </div>
            <hr/>
        </div>
    </div>

    <div className="tec-foot">
        <p className="foot-head">More from Siren</p>   
        <hr/>
        <div className="foot-imgtxt">
            <Card5 image={f3} heading="Cardio-Vascular Endurance"/>
            <Card5 image={f4} heading="Flexibility"/>
            <Card5 image={f5} heading="Power And Coordination"/>
        </div> 
    </div>


        </>
    );
}
export default Fitness;