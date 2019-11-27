# Taz Chat

Taz-Chat was built with Socket.io(https://socket.io/docs/) and React(https://reactjs.org/).
Taz Chat is a chat-application that allows users to create their own chatrooms,
send broadcast messages to everyone else on the chatroom, and see who of their contacts are online.

# How Taz Chat works:

Users can join an existing chatroom or create their own by filling in the form which has inputs for username.
and chatroom and then clicking on the sign in button. Should there already be someone with the same username, 
the user will be notified by an alert, they will have to close the chatbox and then sign in with a different 
username in order to join or create a chatroom.

Once they have created or joined a chatroom with a unique username, they are redirected to a chat box which greets them
(only the user is able to read the greeting message from the "admin" in their chatbox) and allows them to send messages on 
the chatroom. 

Chatroom users are notified as soon as a new user has joined the chatroom, as well as when a user has
left. When users send messages, they are broadcast to everyone who is in the chatroom at that present time.

Everyone who is online is visible by their username in the contacts panel to the left-hand-side of the chat box.
 
# To get Taz Chat up and running, follow these steps:

1. Inside the client directory of the project, run the commands:

### `npm install`
and then
### `npm start`

2. Inside the server directory of the project, run the commands:

### `npm install`
and then
### `npm start`
 
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Run the app in development mode

There is a line of code that will need to be updated;
Find the Chat.js file => client/src/components/Chat/Chat.js

On line 19, change const ENDPOINT = "https://taz-chat.herokuapp.com/" to "localhost:5000" and save the changes.




