import React from "react";
import "../styles/header.css";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon, Settings, Lock } from "lucide-react";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="logo-container">AI-Mentor</div>
      <div className="controls-container">
        <button 
          className="icon-button theme-toggle" 
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-button" title="Settings">
          <Settings size={18} />
        </button>
        <button className="icon-button" title="Security">
          <Lock size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;