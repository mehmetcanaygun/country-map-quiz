import { createSlice } from "@reduxjs/toolkit";
import { countryList } from "../constants"
import { formatCountryListForState } from "../utils";

export interface country {
  name: string;
  id: number;
}
export interface IQuizState {
  countries: country[];
  unlockedCountries: number[];
  isStarted: boolean;
}

const initialState: IQuizState = {
  countries: formatCountryListForState(countryList),
  unlockedCountries: [],
  isStarted: false
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    start(state, action) {
      state.isStarted = true
    },
    unlockCountry(state, action) {
      state.unlockedCountries.push(action.payload.id)
    }
  }
})

export const { start, unlockCountry } = quizSlice.actions

export default quizSlice.reducer