import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import SendIcon from "@material-ui/icons/Send";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FormControl, IconButton, Input } from "@material-ui/core";
import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import Shrug from "./shrug.png";

function App() {
  const messagesEndRef = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <div className="app__header">
        <WhatsAppIcon className="app__Icon" />
        <div className="app__headerText">
          <h2>RichChat</h2>
          <h4>Hi {username}!</h4>
        </div>
      </div>

      <FlipMove className="app__messages">
        {messages.length === 0 ? (
          <img className="app__noMessagesIcon" src={Shrug} alt="No messages" />
        ) : null}
        {messages.map(({ message, id }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>

      <div ref={messagesEndRef} />

      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Email address</InputLabel> */}
          <Input
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="app__input"
          />
          <IconButton
            type="submit"
            disabled={!input}
            onClick={sendMessage}
            className="app__submit"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
