import React, { useState } from "react";

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
  const [openDialog, setOpenDialog] = useState(false);

  const classes = useStyles();

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleAddTask = (text: string, date: string, priority: boolean) => {
    console.log("add", text, date, priority);

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
