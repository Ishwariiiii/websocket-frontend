import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface messageState {

    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    isErrorMessage: string
    allMessage: Record<string, any>
}

const initialState: messageState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isErrorMessage: "",
    allMessage: {}

}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allMessage.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.isErrorMessage = ""
            })

            .addCase(allMessage.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.allMessage = action.payload; // Store the fetched messages
              })
              .addCase(allMessage.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.isErrorMessage = action.payload; // Store error message
              });
    }
})
export default messageSlice.reducer

export const allMessage = createAsyncThunk(
    "ALLMESSAGE",
    async () => {
        try {
            const response = await axios.get("https://socket-chat-backend-purr.onrender.com/api/messages", {
                headers: {
                    'content-type': "application/json"
                }
            })
            console.log(response, "message data")
            return response.data

            toast.success("Login successfully", {
                position: "top-right",
                autoClose: 1000,
            });

        } catch (error) {
            toast.error("Invalid user", {
                position: "top-right",
                autoClose: 1000,
            })
        }
    }
)