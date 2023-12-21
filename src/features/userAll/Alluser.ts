import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/storage'

//Xác định type cho State Slice
export interface CounterState {
    todoList: TodoItem[],
    filters:any,
  }
  
  export interface TodoItem {
    id: number;
    name: string;
    completed: boolean;
    priority: 'Low' | 'Medium' | 'High';
  }
  
  const initialState: CounterState = {
    todoList: [
      { id: 1, name: 'Loi', completed: true, priority: 'Low' },
      { id: 2, name: 'Long', completed: false, priority: 'Medium' },
      { id: 3, name: 'Linh', completed: true, priority: 'High' },
    ],
    filters: {
      search:'',
      status:'All',
      priority: [],
  },
  };
 //=====================  Initial      ===============

export const Alluser = createSlice({
  name: 'userAll',
  initialState,
  reducers: {
     //=========== todoList ===========
    addUser: (state, action: PayloadAction<TodoItem>) => {
      console.log('adduser',action);
        state.todoList = [...state.todoList, action.payload];
    },
    removeUser: (state, action: PayloadAction<number>) => {
        state.todoList = state.todoList.filter(user => user.id !== action.payload);
      },
    getAllUser : (state ) => {
      console.log('getAllUser',);
      state.todoList = [...state.todoList];
      },
      //=========== Filter ===========
      getFilters : (state, action: PayloadAction<TodoItem>) => {
      state.filters = { search:'Change', status:'Change', priority: [],}
      },
  },
})

//=====================  Action      ===============
export const { addUser,removeUser,getAllUser,getFilters  } = Alluser.actions

//=====================  Reducer     ===============
export const selectTodoList = (state: RootState) => state.Alluser.todoList;
export const selectFilters = (state: RootState) => state.Alluser.filters;


export default Alluser.reducer