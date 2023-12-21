import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/storage';
import LocalStorage from '../../constants/localStorage';
import { get_AllCode ,GetAllProjectIdByCurrentPM,post_UserLogin} from '../../services/userService';

// Tài Khoản
interface ILogin_Form{
  usernameOrEmailAddress:string,
  password:string,

}

 
interface IUserAllState {
  entities: {
    result?: any[] | any;
  };
}

const initialState2: IUserAllState = {
  entities: {},
};
 
 
export const postUser = createAsyncThunk(
  'users/postUser',
  async (data:ILogin_Form, thunkAPI) => {
    try {
      console.log('data posst',data);
      const response: any = await post_UserLogin(data);
      // return response;  
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)
 
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response: any = await get_AllCode();
      return response;  
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const handleAuthFulfilled = (state: IUserAllState, action: PayloadAction<any>) => {
  
  const { user, access_token } = action.payload.result;  
  state.entities.result = user;
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.entities.result));
  localStorage.setItem(LocalStorage.accessToken, access_token);
};

const handleUnAuth = (state: IUserAllState) => {
  state.entities.result = [];
  localStorage.removeItem(LocalStorage.user);
  localStorage.removeItem(LocalStorage.accessToken);
};
const userAll = createSlice({
  name: 'userAllHe',
  initialState: initialState2,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      console.log('Redux action',action.payload.result);
      
      state.entities = action.payload.result;
    })
    // .addCase(fetchUser.fulfilled, handleAuthFulfilled)

    //Login - postUser
    // .addCase(postUser.fulfilled,handleAuthFulfilled )
     
  },
});

//=====================  Action      ===============

//=====================  Reducer     ===============
// export const selectTodoList = (state: RootState) => state.userAllReducerLogin.data;
// export const selectFilters = (state: RootState) => state.userAllReducerLogin.filters;

export const { /* Định nghĩa các action nếu cần */ } = userAll.actions;

export const Login_Form = userAll.reducer;
