import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Contacts from "../Contacts/Contacts";
import Messages from "../Messages/Messages";
import Chatroom from "../Chatroom/Chatroom";
import Input from "../Input/Input";

import "./Chat.css";

//initialize socket
let socket;

//the Chat component will have the location prop
const Chat = ({ location }) => {
  //hook is created with the name, users, message and messages waiting to be set with state
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //endpoint is the deployed server, for development mode, change this to "localhost:5000"
  const ENDPOINT = "https://taz-chat.herokuapp.com/";

  useEffect(() => {
    //const name and room are set up according to the parsed query string from the window location
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    //pass in room and name to hook
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, error => {
      //error handling
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    //set messages in message
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
    //set users in room
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    //disconnect event
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    //prevent component from rerendering
    event.preventDefault();
    //if there is a message,set it and then clear the input
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    //the chatbox will contain contacts, the chatroom display, the messages that have been 
    //sent and the input for new messages
    <div className="outerContainer">
      <div className="container">
        <div className="innerContainer">
          <Contacts users={users} />
        </div>
        <div className="inInnerContainer">
          <Chatroom room={room} />

          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
