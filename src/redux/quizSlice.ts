import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  unlockedCountries: [],
  isStarted: false
}

const quizSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    unlockCountry(state, action) {
      console.log(action.payload)
    }
  }
})

export const { unlockCountry } = quizSlice.actions

export default quizSlice.reducer