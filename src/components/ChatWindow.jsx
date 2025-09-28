import React, { useState, useEffect, useRef } from "react";
import "../styles/ChatWindow.css";
import Header from "./Header";
import MessageRenderer from "./MessageRenderer";
import { CircleChevronUp } from "lucide-react";

let chrome;
if (import.meta.env.MODE === 'development') {
  chrome = {
    storage: { local: { get: (keys, cb) => cb({ currentProblem: 'Dev Mode: Sample problem.' }) } },
    runtime: {
      sendMessage: (msg) => console.log('Mocked sendMessage:', msg),
      onMessage: {
        addListener: (cb) => {
          setTimeout(() => cb({ type: 'ASSISTANCE_RECEIVED', payload: { text: 'Dev Mode: Mocked AI response with **markdown** support!\n\n``````\n\nThis is a list:\n- Item 1\n- Item 2\n- Item 3' } }), 2000);
        },
        removeListener: () => {}
      }
    }
  };
} else {
  chrome = window.chrome;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Waiting for problem from page...' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [problemText, setProblemText] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    chrome.storage.local.get("currentProblem", (data) => {
      if (data.currentProblem && data.currentProblem !== 'Could not find problem text on this page.') {
        setProblemText(data.currentProblem);
        setMessages([{ role: 'ai', text: 'Problem loaded! How can I help?' }]);
      } else {
        setProblemText(null);
        setMessages([{ role: 'ai', text: 'No coding problem found. Please refresh the problem page and try again.' }]);
      }
    });

    const messageListener = (request) => {
      if (request.type === 'ASSISTANCE_RECEIVED') {
        const aiResponse = { role: 'ai', text: request.payload.text };
        setMessages(prevMessages => [...prevMessages.slice(0, -1), aiResponse]);
        setIsLoading(false);
      }
    };
    chrome.runtime.onMessage.addListener(messageListener);

    return () => chrome.runtime.onMessage.removeListener(messageListener);
  }, []);

  const handleSend = () => {
    if (!input.trim() || isLoading || !problemText) return;

    const userMessage = { role: 'user', text: input };
    const loadingMessage = { role: 'ai', text: 'Thinking...', isLoading: true };
    
    setMessages(prev => [...prev, userMessage, loadingMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    chrome.runtime.sendMessage({
      type: 'GET_ASSISTANCE',
      payload: {
        problemText: problemText,
        question: currentInput
      }
    });
  };

  return (
    <div className="chat-container">
      <Header />
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message-wrapper ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'ai' ? '🤖' : '👤'}
            </div>
            <div className={`message-bubble ${message.role}`}>
              <MessageRenderer 
                message={message} 
                isLoading={message.isLoading || false}
              />
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isLoading ? "Waiting for response..." : "Ask a question..."}
          disabled={isLoading || !problemText}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} disabled={isLoading || !problemText}>
          <CircleChevronUp size={30} color={isLoading || !problemText ? "#9e9e9e" : "#02b848"} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
