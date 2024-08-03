import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import { getCryptosRequest, getCryptoStatsRequest } from "./Requests"

// Define a type for the slice state
interface CryptoState {
  loading: "loading" | "idle"
  selectionModal: boolean
  selectedCrypto: string
  cryptos: string[]
  cryptoStats: any
}

// Define the initial state using that type
const initialState: CryptoState = {
  loading: "idle",
  selectionModal: false,
  selectedCrypto: "BTC",
  cryptos: [],
  cryptoStats: null,
}

export const getCryptosAsync = createAsyncThunk("crypto/getCryptosRequest", async () => {
  const response = await getCryptosRequest()
  return response
})

export const getCryptoStatsAsync = createAsyncThunk("crypto/getCryptoStatsRequest", async (code: string) => {
  const response = await getCryptoStatsRequest(code)
  return response
})

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
    selectCrypto: (state, action: PayloadAction<string>) => {
      state.selectedCrypto = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCryptosAsync.pending, (state) => {
        state.loading = "loading"
      })
      .addCase(getCryptosAsync.fulfilled, (state, action) => {
        state.cryptos = action.payload
      })
      .addCase(getCryptoStatsAsync.pending, (state) => {
        state.loading = "loading"
      })
      .addCase(getCryptoStatsAsync.fulfilled, (state, action) => {
        state.cryptoStats = action.payload
      })
  },
})

export const { hideSelectionModal, showSelectionModal, selectCrypto } = currencySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSelectionModalState = (state: RootState) => state.currency.selectionModal
export const selectSelectedCrypto = (state: RootState) => state.currency.selectedCrypto
export const selectCryptos = (state: RootState) => state.currency.cryptos
export const selectCryptoStats = (state: RootState) => state.currency.cryptoStats

export default currencySlice.reducer
