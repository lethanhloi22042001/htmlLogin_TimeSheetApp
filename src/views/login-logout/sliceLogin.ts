import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/storage";
import LocalStorage from "../../constants/localStorage";
import {post_UserLogin,} from "../../services/userService";

// Tài Khoản
interface ILogin_Form {
  usernameOrEmailAddress: string;
  password: string;
}

interface IUserAllState {
  entities: {
    result?: any[] | any;
    error?: any;
    status?: any;
    success?: any;
  };
}
const initialState2: IUserAllState = {
  entities: {},
};

export const postUser = createAsyncThunk(
  "users/postUser",
  async (data: ILogin_Form, thunkAPI) => {
    try {
      const response: any = await post_UserLogin(data);
      return response;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
const handleAuthFulfilled = (state: IUserAllState,action: PayloadAction<any>) => {
  const { userId, accessToken } = action.payload.result;
  state.entities.result = userId;
  localStorage.setItem(LocalStorage.user,JSON.stringify(state.entities.result));
  localStorage.setItem(LocalStorage.accessToken, accessToken);
};

const handleUnAuth = (state: IUserAllState) => {
  state.entities.result = [];
  localStorage.removeItem(LocalStorage.user);
  localStorage.removeItem(LocalStorage.accessToken);
};
const userAll = createSlice({
  name: "userAllHe",
  initialState: initialState2,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, handleAuthFulfilled);
  },
});

//=====================  Action      ===============

//=====================  Reducer     ===============
// export const selectTodoList = (state: RootState) => state.userAllReducerLogin.data;
// export const selectFilters = (state: RootState) => state.userAllReducerLogin.filters;

export const {
  /* Định nghĩa các action nếu cần */
} = userAll.actions;

export const Login_Form = userAll.reducer;
