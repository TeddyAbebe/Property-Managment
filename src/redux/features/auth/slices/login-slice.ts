import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  value: {},
}

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginInfo: (state, action: PayloadAction<any>) => {
      state.value = action.payload
    },
    logout: state => {
      state.value = initialState.value
    },
  },
})

export const { setLoginInfo, logout } = login.actions
export default login.reducer
