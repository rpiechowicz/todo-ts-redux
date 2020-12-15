import React from "react";

import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addTask: {
    marginLeft: 20,
    marginTop: 10,
  },
});

function AddTask() {
  const classes = useStyles();

  return (
    <div className={classes.addTask}>
      <Fab size="large" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default AddTask;
