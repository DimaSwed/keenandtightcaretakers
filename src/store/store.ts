import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './slices/slice-navigation'
import snackbarReducer from './slices/snackbarSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      navigation: navigationReducer,
      snackbar: snackbarReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
