import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../../store/reducers/tasksReducers";

import { Portal, List } from "../../components";

import { AppBar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface stateTask {
  id?: void | string;
  text?: string;
  date?: string;
  active?: boolean;
  priority?: boolean;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TasksList() {
  const [value, setValue] = useState(0);
  const tasks = useSelector(selectTasks);

  const activeTasks = tasks.filter((task: stateTask) => task.active);
  const finishedTasks = tasks.filter((task: stateTask) => !task.active);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Portal>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Active Tasks" {...a11yProps(0)} />
              <Tab label="Finished Tasks" {...a11yProps(1)} />
            </Tabs>
          </AppBar>

          {/* Active Tasks */}
          <List tasks={activeTasks} value={value} index={0} />

          {/* Finished Task */}
          <List tasks={finishedTasks} value={value} index={1} />
        </div>
      </Portal>
    </div>
  );
}

export default TasksList;
