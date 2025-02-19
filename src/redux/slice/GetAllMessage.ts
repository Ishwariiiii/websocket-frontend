import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Message {
  text: string;
  sender: string;
  timestamp?: string;
}

interface MessageState {
  allMessage: Message[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isErrorMessage: string;
  token: string | null;
}

const initialState: MessageState = {
  allMessage: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isErrorMessage: "",
  token: null,
};

// Fetch all messages


const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Messages
      .addCase(allMessage.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(allMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allMessage = action.payload;
        state.isError = false;
      })
      .addCase(allMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isErrorMessage = action.payload as string || "An error occurred";
      })
      
     
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allMessage = [...state.allMessage, action.payload]; 
      
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isErrorMessage = action.payload as string || "Failed to send message";
      });
  },
});

export default messageSlice.reducer;

export const allMessage = createAsyncThunk(
  "messages/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://socket-chat-backend-purr.onrender.com/api/messages", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch messages");
    }
  }
);

// Send a message
export const sendMessage = createAsyncThunk(
  "messages/send",
  async (message: string, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://socket-chat-backend-purr.onrender.com/api/messages",
        { text: message },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to send message");
    }
  }
);
