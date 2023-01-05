import React from "react";
import './App.css';
import Header from "./Header";
import Leftsection from "./Leftsection";
import Movingcontent from "./MovingContent";
import SideNavBar from "./SideNavBar/SideNavBar";

export default function App() {

  return (
    <div className="App">
    <Header />
    <Leftsection />
    <Movingcontent />
  </div>
  );
}