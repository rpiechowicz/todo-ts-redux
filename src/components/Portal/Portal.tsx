import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 475,
    height: 600,
  },
  card: {
    margin: 10,
  },
  item: {
    display: "block",
    margin: 15,
  },
});

interface childrenInterface {
  children: React.ReactNode;
}

function Portal(props: childrenInterface) {
  const { children } = props;

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={20} className={classes.card}>
        <Card className={classes.root}>{children}</Card>
      </Paper>
    </div>
  );
}

export default Portal;
