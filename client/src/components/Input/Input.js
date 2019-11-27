import React from "react";
import { Button } from "@material-ui/core";
import "./Input.css";

//Input accepts props to allow it to capture messages in the input of the user inside the form
const Input = ({ setMessage, sendMessage, message }) => (
  //form that accepts user input
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="..."
      //message value is set here as the message is being typed
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      //if the key pressed is enter or the send button is pressed, send the message on the chatroom
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <Button
      color="secondary"
      variant="contained"
      type="submit"
      //if the enter key is pressed, send the messafe on the chatroom
      onClick={e => sendMessage(e)}
    >
      Send
    </Button>
  </form>
);

export default Input;
