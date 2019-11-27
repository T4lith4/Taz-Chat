import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

//material-ui styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 10)
  }
}));

const Home = () => {
  //The home component will be using hooks to set the name and the chatroom of the user
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  //refer to the above styles for material-ui
  const classes = useStyles();

  return (
    //Outer container display with the sign-in form
    <div className="joinOuterContainer">
      <h1 className="heading">
        Welcome <br /> to <br />
        TAZCHAT
      </h1>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Start the Chat or Join it
        </Typography>
        <br />
        <Typography component="h5">
          <input
            className="sign-in-input"
            type="text"
            placeholder="Name"
            //the name is grabbed from the target value
            onChange={event => setName(event.target.value)}
          />
          <br />
          <input
            className="sign-in-input"
            type="text"
            placeholder="Chatroom"
            //the chatroom is grabbed from the target value
            onChange={event => setRoom(event.target.value)}
          />
          <br />
          <br />
        </Typography>
        <Link
          //when the sign in button is clicked and there is no chatroom or no username, prevent the component from rerendering, otherwise do nothing
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          //redirect the user to the chatbox with the assigned username and chatroom name
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button color="secondary" variant="contained" type="submit">
            Sign In
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default Home;
