import React from "react";
import "./Contacts.css";

const Contacts = ({ users }) => (
  //this component renders the contacts icon as well as any users who have joined the same chatroom
  <div className="contact-box">
    <h1 className="contact-heading">
      {" "}
      <span role="img" aria-label="emoji" alt="contacts icon">
        👥
      </span>
    </h1>
    {users ? 
    //if there are users, map over their usernames ans display it in a styled div with a green "online" icon, otherwise, display nothing
    (
      <div className="online-Box">
        <h4 className="username">
          {users.map(({ name }) => (
            <div key={name}>
              <img
                className="online-dot"
                alt="online-icon"
                //import the green "online" icon 
                src={require("./dot.png")}
              />{" "}
              {name}
              <br/>
            </div>
          ))}
        </h4>
      </div>
    ) : null}
  </div>
);

export default Contacts;
