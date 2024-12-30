import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, type: "text" }]);
      setMessage("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: file.name, type: "file" }]);
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.type === "file" ? "file-message" : "text-message"}`}
          >
            {msg.type === "file" ? (
              <span>📄 <a href="#" download>{msg.text}</a></span>
            ) : (
              <span>{msg.text}</span>
            )}
          </div>
        ))}
      </div>
      <div className="chatbot-input-area">
        <label htmlFor="file-upload" className="plus-button">
          +
        </label>
        <input
          id="file-upload"
          type="file"
          className="file-input"
          onChange={handleFileUpload}
        />
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
