import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { apiSlice } from "./features/api-slice"
import loginReducer from "./features/auth/slices/login-slice"
import sidebarReducer from "./features/sidebar-slice"

const loginPersist = {
  key: "login",
  storage,
}

const sidebarPersist = {
  key: "sidebar",
  storage,
}

const loginPersistConfig = persistReducer(loginPersist, loginReducer)
const sidebarPersistConfig = persistReducer(sidebarPersist, sidebarReducer)

export const store = configureStore({
  reducer: {
    login: loginPersistConfig,
    sidebar: sidebarPersistConfig,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
