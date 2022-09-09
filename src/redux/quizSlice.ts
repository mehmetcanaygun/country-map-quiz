import { createSlice } from "@reduxjs/toolkit";

interface country {
  name: string;
  id: number;
}
export interface IQuizState {
  countries: country[];
  unlockedCountries: number[];
  isStarted: boolean;
}

const initialState: IQuizState = {
  countries: [
    {
      name: "Türkiye",
      id: 1
    },
    {
      name: "İngiltere",
      id: 2
    },
    {
      name: "Almanya",
      id: 3
    },
    {
      name: "Fransa",
      id: 4
    }
  ],
  unlockedCountries: [4],
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