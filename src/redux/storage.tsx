import { configureStore } from '@reduxjs/toolkit'
import { Login_Form } from '../views/login-logout/sliceLogin'
import { Card1TimeSheet } from '../component/section1/sliceCard1'
import { useDispatch } from 'react-redux'
export const store = configureStore({
  reducer: {
    Login_Form:Login_Form,
    Card1TimeSheet:Card1TimeSheet,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatch>()