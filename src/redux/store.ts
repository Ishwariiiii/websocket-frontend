import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/AuthSlice";
import messageReducer from "./slice/GetAllMessage"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message:messageReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
