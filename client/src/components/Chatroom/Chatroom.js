import React from 'react';
import './Chatroom.css';

//The Chatroom component accepts the room prop for display purposes, the window close icon also directs the user back to the sign in form on the home-page
const Chatroom = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h2> {room} <span role="img" aria-label="emoji">💬</span></h2>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><i className="fas fa-window-close"></i></a>
    </div>
  </div>
);

export default Chatroom;

