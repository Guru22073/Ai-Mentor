import React from "react";
import "../styles/header.css";

import { Sun, Moon, Settings, Lock } from "lucide-react";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">AI-Mentor</div>
      <div className="controls-container">
        <button className="icon-button"><Sun size = {18} /></button>
        <button className="icon-button"><Settings size = {18} /></button>
        <button className="icon-button"><Lock size = {18} /></button>
      </div>
    </header>
  );
};

export default Header;
