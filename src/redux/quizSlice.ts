import { createSlice } from "@reduxjs/toolkit";
import { countryList, PHASES } from "../constants"
import { formatCountryListForState } from "../utils";

export interface country {
  name: string;
  id: number;
}
export interface IQuizState {
  countries: country[];
  unlockedCountries: number[];
  phase: string;
}

const initialState: IQuizState = {
  countries: formatCountryListForState(countryList),
  unlockedCountries: [],
  phase: PHASES.START
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    start(state) {
      state.unlockedCountries = []
      state.phase = PHASES.QUIZ
    },
    end(state) {
      state.phase = PHASES.END
    },
    unlockCountry(state, action) {
      state.unlockedCountries.push(action.payload.id)
    }
  }
})

export const { start, end, unlockCountry } = quizSlice.actions

export default quizSlice.reducer