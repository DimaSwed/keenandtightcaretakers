import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISnackbarState {
  message: string
  severity: 'success' | 'error' | null
  open: boolean
}

const initialState: ISnackbarState = {
  message: '',
  severity: null,
  open: false
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{ message: string; severity: 'success' | 'error' }>
    ) => {
      state.message = action.payload.message
      state.severity = action.payload.severity
      state.open = true
    },
    hideSnackbar: (state) => {
      state.open = false
    }
  }
})

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions
export default snackbarSlice.reducer
