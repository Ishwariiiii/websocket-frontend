import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

interface AuthState {
  loginData: Record<string, any>
  token: string | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isErrorMessage: string
  signupData: Record<string, any>
}

const initialState: AuthState = {
  loginData: {},
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isErrorMessage: "",
  signupData: {},
}


const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.isErrorMessage = ""
      })

      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        // console.log(action.payload,"login dataaa sliceee")
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.loginData = action.payload;
        state.token = action.payload?.token || null
        localStorage.setItem("token", action.payload?.token)
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.isErrorMessage = action.payload
      })

      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.isErrorMessage = ""
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.signupData = action.payload
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.isErrorMessage = action.payload
      })
  },
})


export default loginSlice.reducer
export const loginUser = createAsyncThunk(

  "LOGIN/USER",
  async (user: Record<string, any>) => {
    try {
      const response = await axios.post("https://socket-chat-backend-purr.onrender.com/api/auth/login", user)

      toast.success("Login successfully", {
        position: "top-right",
        autoClose: 1000,
      });

      console.log(response.data, "login data")
      return response.data

    } catch (error) {
      toast.error("Invalid user", {
        position: "top-right",
        autoClose: 1000,
      })
    }
  }
)

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (user: Record<string, any>) => {
    try {
      const response = await axios.post("https://socket-chat-backend-purr.onrender.com/api/auth/register", user)
      toast.success("Register user successfully", {
        position: "top-right",
        autoClose: 1000,
      })
      console.log(response.data, "register data")
      return response.data
    } catch (error) {
      toast.error("Failed", {
        position: "top-right",
        autoClose: 1000,
      })
    }
  }
);

