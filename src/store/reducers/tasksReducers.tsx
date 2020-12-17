import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tasksState {
  error: boolean;
  tasks: [
    {
      id: string;
      text: string;
      date: string;
      active: boolean;
      priority: boolean;
    },
    {
      id: string;
      text: string;
      date: string;
      active: boolean;
      priority: boolean;
    }
  ];
}

const initialState: tasksState = {
  error: false,
  tasks: [
    {
      id: "eefffa0d-898e-4db3-885e-3384a8aad3a4",
      text: "Nauczyć się TS",
      date: "20-12-2020",
      active: true,
      priority: true,
    },
    {
      id: "eefffa0d-898e-4db3-885e-3384a8aad3a4",
      text: "Umyć auto",
      date: "10-12-2020",
      active: false,
      priority: true,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action: PayloadAction<[]>) {
      state.tasks = [
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
      ];
    },
    finish(state, action: PayloadAction<[]>) {
      state.tasks = [
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
      ];
    },
    remove(state, action: PayloadAction<[]>) {
      state.tasks = [
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
        {
          id: "",
          text: "",
          date: "",
          active: true,
          priority: true,
        },
      ];
    },
    error(state, action: PayloadAction<{ error: boolean }>) {
      state.error = action.payload.error;
    },
  },
});

export const { add, finish, remove, error } = tasksSlice.actions;

export const selectTasks = (state: any) => state.tasks.tasks;
export const selectError = (state: any) => state.tasks.error;

export default tasksSlice.reducer;
