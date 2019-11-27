Taz-Chat was built with Socket.io(https://socket.io/docs/) and React(https://reactjs.org/).
Taz Chat is a chat-application that allows users to create their own chatrooms,
send broadcast messages to everyone else on the chatroom, and see who of their contacts are online.

# How Taz Chat works:

Users can join an existing chatroom or create their own by filling in the sign in form.
 chatrooms with any username and chatroom name of their choice.
Should there already be someone with the same username, the user will be notified by an alert.

Once they have created the chatroom, they are redirected to a chat box which greets them
and allows them to send messages on the chatroom. The message are then broadcast to everyone who is
in the chatroom.

Chatroom users are notified as soon as a new user has joined the chatroom, as well as when a user has
left.
 
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

On line 23, change const ENDPOINT = "https://taz-chat.herokuapp.com/" to "localhost:5000" and save the changes.

# See a deployed version of Taz Chat:

https://5ddcf034f0c1e76c8576a023--tazchat.netlify.com/




