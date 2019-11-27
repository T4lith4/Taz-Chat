//initialize empty array od=f users
const users = [];

//adding a user will take in id,name and room parameters
const addUser = ({ id, name, room }) => {

  //set name and user to lowercase and eliminate whitespace
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

 //see if there already is a user with that username and chatroom signed in
  const existingUser = users.find((user) => user.room === room && user.name === name);

  //if the user has not filled in any sections of the form, alert this:
  if(!name || !room) return { error: 'Username and room are required.' };

  //if the user exists, alert this
  if(existingUser) return { error: 'Username is taken.' };
  //the user variable needs to have an id, name and room
  const user = { id, name, room };
  //add the user to the users array
  users.push(user);

  return { user };
}

//removing a user only requires the id parameter
const removeUser = (id) => {

  //set an index by finding the index of the user-id and setting it onto id
  const index = users.findIndex((user) => user.id === id);

  //should the index not equal -1, return the users array with the user at index 0 removed from it.
  if(index !== -1) return users.splice(index, 1)[0];
}

//find the user that matched that user-id in the users array
const getUser = (id) => users.find((user) => user.id === id);
//find the users in a specific room and filter them accordingly
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

//export these functions to be used in index.js
module.exports = { addUser, removeUser, getUser, getUsersInRoom };