import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Bollywood from "./Navs/Bollywood";
import Home from "./Navs/Home";
import Fitness from "./Navs/Fitness";
import Food from "./Navs/Food";
import Hollywood from "./Navs/Hollywood";
import Technology from "./Navs/Technology";
import {Logini} from "./Navs/Login";
import Navigation from "./Navigation";
import { Signini } from "./Navs/SignIn";

function App(){
  return(
    <>
    <div className="topic "><span className="the">The</span> Siren</div>
    <Navigation/>
    <hr style={{width:'75%',borderTop:'2px solid rgb(182, 184, 186)' }}/>
    <div className="content ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/hollywood" element={<Hollywood/>}/>
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/login" element={<Logini/>}/>
        <Route path="/signin" element={<Signini/>}/>
        <Route path="/*" element={<h1>Error 404 Not Found</h1>}/>
      </Routes>
    </div>
    </>
  );
}
export default App;