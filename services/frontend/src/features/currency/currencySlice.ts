import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

// Define a type for the slice state
interface CurrencyState {
  selectionModal: boolean
  selectedCurrency: string
}

// Define the initial state using that type
const initialState: CurrencyState = {
  selectionModal: false,
  selectedCurrency: "",
}

export const currencySlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showSelectionModal: (state) => {
      state.selectionModal = true
    },
    hideSelectionModal: (state) => {
      state.selectionModal = false
    },
    selectCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload
    },
  },
})

export const { hideSelectionModal, showSelectionModal, selectCurrency } = currencySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSelectionModalState = (state: RootState) => state.currency.selectionModal
export const selectSelectedCurrency = (state: RootState) => state.currency.selectedCurrency

export default currencySlice.reducer
