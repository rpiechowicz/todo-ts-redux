import React, { useMemo } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  List as ListMaterial,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

interface taskInterface {
  tasks: { text: string; date: string; active: boolean; priority: boolean };
}

const useStyles = makeStyles({
  importantField: {
    color: "red",
    fontWeight: 400,
  },
  date: {
    position: "absolute",
    right: "20%",
  },
  title: {
    fontSize: 20,
  },
});

function Task(props: taskInterface) {
  const { text, priority, date, active } = props.tasks;

  const classes = useStyles();

  const secondaryText = useMemo(
    () => priority && <span className={classes.importantField}>Important</span>,
    [priority, classes.importantField]
  );

  return (
    <Box p={3}>
      <ListMaterial>
        <ListItem>
          <ListItemText primary={text} secondary={secondaryText} />
          <ListItemText>{date}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              //   onClick={onClickRemove}
            >
              <DeleteIcon />
            </IconButton>
            {active && (
              <IconButton
                edge="end"
                aria-label="delete"
                // onClick={onClickFinish}
              >
                <DoneIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      </ListMaterial>
      <Divider />
    </Box>
  );
}

export default Task;
