import React from "react";

import { Task } from "../../components";

interface ListProps {
  tasks: any;
  index: any;
  value: any;
}

function List(props: ListProps) {
  const { tasks, value, index, ...other } = props;

  return (
    <div>
      {tasks.map((task: any) => (
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
