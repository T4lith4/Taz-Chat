import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';

//I am settig App.js as the router for my client-side
//The HomePage will be the sign-in for users, chat will display the chat-box
const App = ()=> (
   <Router>
       <Route path="/" exact component ={Home} />
       <Route path="/chat" exact component ={Chat} />
   </Router>

)
export default App;
