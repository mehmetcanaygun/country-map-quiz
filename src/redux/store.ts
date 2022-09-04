import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'

export default configureStore({
  reducer: {
    countries: quizReducer
  },
})
