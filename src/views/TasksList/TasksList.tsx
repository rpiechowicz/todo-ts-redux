import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../../store/reducers/tasksReducers";

import { Portal, List } from "../../components";

import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

interface TabPanelProps {
  children: any;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children[0]?.text}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TasksList() {
  const [value, setValue] = useState(0);

  const tasks = useSelector(selectTasks);
  const activeTasks = tasks.filter((task: any) => task.active);
  const finishedTasks = tasks.filter((task: any) => !task.active);

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
