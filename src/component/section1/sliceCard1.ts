import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/storage";
import LocalStorage from "../../constants/localStorage";
import {GetAllTimeSheetOfUser,} from "../../services/userService";

interface ApiResponse {
  userId: string;
  accessToken: string;
}

export interface ImainTimeSheet {
  entities:{
      id: number
      projectName: string
      taskName: string
      projectTaskId: number
      customerName: string
      projectCode: string
      dateAt: string
      workingTime: number
      status: number
      note: string
      typeOfWork: number
      isCharged: boolean
      billable: boolean
      isTemp: boolean
      workType: string
  }
  
}

const initialState: ImainTimeSheet = {
  entities: {
    billable: false,
      isTemp: false,
    isCharged:false,
    projectTaskId:2,
    id: 1,
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
  }
};

// Xử lí API
export const GetAllTimeSheetRedux = createAsyncThunk(
  "GetAllTimeSheetRedux",
  async (data: any, thunkAPI) => {
    try {
      const { date1, date2 } = data;
      const response: any = await GetAllTimeSheetOfUser(date1, date2);
      return response; 
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
const handleAuthFulfilled = (state: ImainTimeSheet,action: PayloadAction<any>) => {
  state.entities = action.payload.result;
};

const userAllCard1 = createSlice({
  name: "mainTimeSheet",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllTimeSheetRedux.fulfilled, handleAuthFulfilled);
  },
});


export const { 
  /* Định nghĩa các action nếu cần */} = userAllCard1.actions;

export const Card1TimeSheet = userAllCard1.reducer; 