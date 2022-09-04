import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [
    "Türkiye",
    "İngiltere",
    "Fransa"
  ],
  unlockedCountries: [
    "Türkiye"
  ]
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    unlockCountry(state, action) {
      state.unlockedCountries.push(action.payload)
    }
  }
})

export const { unlockCountry } = countriesSlice.actions

export default countriesSlice.reducer