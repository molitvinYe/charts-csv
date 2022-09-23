import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IData } from "../../modules/IData"

interface DataState {
  data: IData[],
  isLoading: boolean,
  error: string,
  parameter: string,
  dateRange: {
    all: string[],
    filter: string[]
  },
  categories: {
    all: string[],
    filter: string[]
  }
}

export const initialState: DataState  = {
  data: [],
  isLoading: false,
  error: "",
  parameter: "markdown",
  dateRange: {
    all: [],
    filter: []
  },
  categories: {
    all: [],
    filter: []
  }
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataFetching(state) {
      state.isLoading = true
    },

    dataFetchingSuccess(state, action: PayloadAction<IData[]>) {
      state.isLoading = false
      state.error = ''
      state.data = action.payload

      const dateRange: string[] = []
      const categories: string[] = []

      action.payload.forEach((row) => {
        const week = row.week_ref
        const category = row.category_desc
        if (week && !dateRange.includes(week)) dateRange.push(week)
        if (category && !categories.includes(category)) categories.push(category)
      })

      state.dateRange = {
        all: dateRange,
        filter: dateRange
      }

      state.categories = {
        all: categories,
        filter: categories
      }
    },

    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },

    setParameter(state, action: PayloadAction<string>) {
      state.parameter = action.payload
    },

    setDataRange(state, action: PayloadAction<string[]>) {
      state.dateRange = {
        ...state.dateRange,
        filter: action.payload
      }
    },

    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = {
        ...state.categories,
        filter: action.payload
      }
    },

    resetFilters(state) {
      state.dateRange = {
        all: state.categories.all,
        filter: state.categories.all
      }
      state.categories = {
        all: state.categories.all,
        filter: state.categories.all
      }
    }
  }
})


export default dataSlice.reducer