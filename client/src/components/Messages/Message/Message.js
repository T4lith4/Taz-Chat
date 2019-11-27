import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";

//The message component takes in the text, user and name props and decides how to display a message
//(with different styling based on whether it is a new user or the admin displaying a notification)
const Message = ({ message: { text, user }, name }) => {
  //if it is a new user, set the name to lower case without whitespace
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  //if it is not a new user, let the condition be true.
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    //display user messages along with the name(green bubble)
    <div>
      <p className="sender pr-10">{trimmedName + "-"}</p>
      <div className="messageContainer justifyEnd">
        <div className="messageBox backgroundGreen">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  ) : (
    //display admin notifications along with the admin name (peach bubble)
    <div>
      <p className="sender pl-10 ">{user + "-"}</p>
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
