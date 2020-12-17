import React, { useMemo, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectError, error } from "../../../store/reducers/tasksReducers";

import CloseIcon from "@material-ui/icons/Close";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  Typography,
  IconButton,
  FormControl,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import EventIcon from "@material-ui/icons/Event";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function DialogTask(props: any) {
  const { openDialog, closeDialog, addTask } = props;
  const dispatch = useDispatch();
  const errorIsActive = useSelector(selectError);
  const [inputTask, setInputTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [priorityCheck, setPriorityCheck] = useState(false);

  const handleClose = () => closeDialog();
  const handleAddTask = () => {
    if (!inputTask) {
      dispatch(error({ error: true }));
      return;
    }

    addTask(inputTask, selectedDate, priorityCheck);

    setInputTask("");
    setSelectedDate(new Date());
    setPriorityCheck(false);
  };

  const handleChangeInput = useCallback(
    (e) => {
      errorIsActive && dispatch(error({ error: false }));
      setInputTask(e.target.value);
    },
    [errorIsActive, dispatch]
  );

  const handleSetDate = useCallback((e) => setSelectedDate(e), [
    setSelectedDate,
  ]);

  const handleSetCheckbox = useCallback(
    (e) => setPriorityCheck(e.target.checked),
    [setPriorityCheck]
  );

  const labelError = useMemo(() => (errorIsActive ? "Error" : "Description"), [
    errorIsActive,
  ]);

  const helperTextError = useMemo(
    () => errorIsActive && "This filed is required",
    [errorIsActive]
  );

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
        fullWidth
        disableBackdropClick
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add new task
        </DialogTitle>
        <DialogContent dividers>
          <FormControl style={{ width: "100%" }}>
            <TextField
              error={errorIsActive}
              variant="filled"
              id="standard-error-helper-text"
              label={labelError}
              helperText={helperTextError}
              value={inputTask}
              onChange={handleChangeInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                style={{ marginTop: 20 }}
                value={selectedDate}
                inputVariant="filled"
                disablePast
                onChange={handleSetDate}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </MuiPickersUtilsProvider>

            <FormControlLabel
              style={{ marginTop: 20, width: "fit-content" }}
              control={<Checkbox name="checkedA" color="primary" />}
              label="Prority"
              value={priorityCheck}
              onChange={handleSetCheckbox}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleAddTask}
            color="primary"
            variant="contained"
          >
            Add task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogTask;
