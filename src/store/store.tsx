import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksReducers";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
