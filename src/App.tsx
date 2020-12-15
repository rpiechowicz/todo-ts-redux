import React from "react";

import { AddTask, TasksList } from "./views";

import { makeStyles } from "@material-ui/core/styles";
import "./assets/App.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
          <TasksList />
          {/* Finished Tasks*/}
          <AddTask />
        </div>
      </header>
    </div>
  );
}

export default App;
