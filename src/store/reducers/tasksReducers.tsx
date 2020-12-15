import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tasksState {
  tasks: [];
}

const initialState: tasksState = { tasks: [] };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action: PayloadAction<[]>) {
      state.tasks = [];
    },
    finish(state, action: PayloadAction<[]>) {
      state.tasks = [];
    },
    remove(state, action: PayloadAction<[]>) {
      state.tasks = [];
    },
    error(state, action: PayloadAction<[]>) {
      state.tasks = [];
    },
  },
});

export const { add, finish, remove, error } = tasksSlice.actions;
export default tasksSlice.reducer;
