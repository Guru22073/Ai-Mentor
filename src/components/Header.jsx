import React from "react";
import "../styles/header.css";
import { useTheme } from "../contexts/ThemeContext";
import { useLock } from "../contexts/LockContext";
import { Sun, Moon, Settings, Lock, Unlock } from "lucide-react";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isLocked, toggleLock } = useLock();

  const handleLockToggle = async () => {
    await toggleLock();
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        AI-Mentor
        {isLocked && <span className="lock-indicator">🔒</span>}
      </div>
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
        <button 
          className={`icon-button lock-button ${isLocked ? 'locked' : ''}`}
          onClick={handleLockToggle}
          title={isLocked ? "Unlock (allow closing when clicked outside)" : "Lock (prevent closing when clicked outside)"}
        >
          {isLocked ? <Unlock size={18} /> : <Lock size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
