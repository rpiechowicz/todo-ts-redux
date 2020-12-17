import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { add } from "../../store/reducers/tasksReducers";

import DialogTask from "./DialogTask";

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
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const classes = useStyles();

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleAddTask = (text: string, date: string, priority: boolean) => {
    const task = {
      id: uuidv4(),
      text,
      date: new Date(date).toLocaleDateString().split(".").join("-"),
      active: true,
      priority,
    };

    dispatch(add({ task }));

    setOpenDialog(false);
  };

  return (
    <div className={classes.addTask}>
      <Fab
        size="large"
        color="secondary"
        aria-label="add"
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>

      <DialogTask
        openDialog={openDialog}
        addTask={handleAddTask}
        closeDialog={handleCloseDialog}
      />
    </div>
  );
}

export default AddTask;
