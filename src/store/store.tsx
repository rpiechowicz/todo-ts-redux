import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksReducers";

import notificationMiddleware from "./middleware/notification";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notificationMiddleware),
  reducer: {
    tasks: tasksReducer,
  },
});
