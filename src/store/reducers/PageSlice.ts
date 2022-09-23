import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: {page: number, lastPage: number} = {
  page: 1,
  lastPage: 1
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changeActivePage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setLastPage(state, action: PayloadAction<number>) {
      state.lastPage = action.payload
    }
  }
})

export default pageSlice.reducer