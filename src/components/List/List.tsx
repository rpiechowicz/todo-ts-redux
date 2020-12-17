import React from "react";

import { Task } from "../../components";
import { makeStyles } from "@material-ui/core/styles";

interface stateTask {
  id: string;
  text: string;
  date: string;
  active: boolean;
  priority: boolean;
}

interface ListProps {
  tasks: stateTask[];
  index: any;
  value: any;
}

const useStyles = makeStyles({
  root: {
    overflow: "auto",
    overflowStyle: "marquee,panner",
    maxHeight: "560px",
  },
});

function List(props: ListProps) {
  const { tasks, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tasks.map((task: stateTask) => (
        <div
          key={task.id}
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          <Task tasks={task} />
        </div>
      ))}
    </div>
  );
}

export default List;
