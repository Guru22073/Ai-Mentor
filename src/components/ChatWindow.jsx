import React from "react";
import "../styles/ChatWindow.css";
import Header from "./Header";

const ChatWindow = () => {
  return (
    <div className="chat-container">
      <Header />

      <main className="message-list">
        generated response
      </main>

      <footer className="chat-input-area">
        input chat box
      </footer>
    </div>
  );
};

export default ChatWindow;
