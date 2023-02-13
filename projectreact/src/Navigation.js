import React from "react";
import { NavLink ,Link} from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return(
        <div className="navi">
             <NavLink className="hee" to="/home">Home</NavLink>
             <NavLink to="/bollywood" className="hee">Bollywood</NavLink>
             <NavLink to="/technology" className="hee">Technology</NavLink>
             <NavLink to="/hollywood" className="hee">Hollywood</NavLink>
            <NavLink to="/fitness" className="hee">Fitness</NavLink>
            <NavLink to="/food" className="hee">Food</NavLink>
            <NavLink to="/login" className="hee">Login/SignIn</NavLink>
        </div>

    );
}
export default Navigation;