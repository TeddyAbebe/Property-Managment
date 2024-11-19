import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isMinimized: false,
}

export const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: state => {
      state.isMinimized = !state.isMinimized
    },
  },
})

export const { toggle } = sidebar.actions
export default sidebar.reducer
