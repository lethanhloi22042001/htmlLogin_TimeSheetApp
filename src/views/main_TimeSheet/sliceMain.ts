import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/storage";
import LocalStorage from "../../constants/localStorage";


interface ImainTimeSheet {
  entities: {
    projectName: string,
    taskName: string,
    customerName: string,
    projectCode: string,
    dateAt:string|Date|any,
    workingTime:number,
    status:number,
    note:string,
    typeOfWork:number,
    workType:string,
  };
}
const initialState: ImainTimeSheet = {
  entities: {
    projectName: '',
    taskName: '',
    customerName: '',
    projectCode: '',
    dateAt: '',
    workingTime: 0,
    status: 0,
    note: '',
    typeOfWork: 0,
    workType: '',
  },
};

export const postUser = createAsyncThunk(
  "users/postUser",
  async (data: any, thunkAPI) => {
    try {

    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
const handleAuthFulfilled = (state: any,action: PayloadAction<any>) => {
  
  const { userId, accessToken } = action.payload.result;
  state.entities.result = userId;

  
  localStorage.setItem(LocalStorage.user,JSON.stringify(state.entities.result));
  localStorage.setItem(LocalStorage.accessToken, accessToken);
  //new
  // state.entities = action.payload.result;
};

const handleUnAuth = (state: ImainTimeSheet) => {
//   state.entities.result = [];
  localStorage.removeItem(LocalStorage.user);
  localStorage.removeItem(LocalStorage.accessToken);
};
const userAll = createSlice({
  name: "mainTimeSheet",
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