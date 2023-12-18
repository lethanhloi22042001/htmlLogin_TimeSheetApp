import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/storage'

//Xác định type cho State Slice
export interface CounterState {
  value: number,
  value2:number,

}

const initialState: CounterState = {
  value: 0,
  value2:3,

}
 

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value2 += 1
    },
    decrement: (state) => {
      state.value2 -= 1
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer