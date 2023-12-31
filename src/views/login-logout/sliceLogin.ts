import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/storage";
import LocalStorage from "../../constants/localStorage";
import {post_UserLogin,} from "../../services/userService";

interface ILogin_Form {
  usernameOrEmailAddress: string;
  password: string;
}

interface IUserAllState {
  entities: {
    result?: string[] |{};
    // result? : {
    //   accessToken: string;
    //   encryptedAccessToken: string;
    //   expireInSeconds: number;
    //   userId: number;
    // }
  };
}
const initialState: IUserAllState = {
  entities: {},
};

export const postUser = createAsyncThunk(
  "users/postUser",
  async (data: ILogin_Form, thunkAPI) => {
    try {
      const response:any = await post_UserLogin(data);
      
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

const userAll = createSlice({
  name: "userAllHe",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.fulfilled, handleAuthFulfilled);
  },
});


export const {
  /* Định nghĩa các action nếu cần */
} = userAll.actions;

export const Login_Form = userAll.reducer;