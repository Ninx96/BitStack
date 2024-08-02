import { Schema, model } from "mongoose"

// * Interface

export interface Cryptocurrency {
  name: string
  symbol: string
  rank: number
  age: number
  color: string
  png32: string
  png64: string
  webp32: string
  webp64: string
  exchanges: number
  markets: number
  pairs: number
  categories: string[]
  allTimeHighUSD: number
  circulatingSupply: number
  totalSupply: number
  maxSupply: number
  code: string
  rate: number
  volume: number
  cap: number
  delta: Delta
}

interface Delta {
  hour: number
  day: number
  week: number
  month: number
  quarter: number
  year: number
}

//* Schema

const DeltaSchema = new Schema<Delta>({
  hour: { type: Number },
  day: { type: Number },
  week: { type: Number },
  month: { type: Number },
  quarter: { type: Number },
  year: { type: Number },
})

const CryptoSchema = new Schema<Cryptocurrency>({
  name: { type: String },
  symbol: { type: String },
  rank: { type: Number },
  age: { type: Number },
  color: { type: String },
  png32: { type: String },
  png64: { type: String },
  webp32: { type: String },
  webp64: { type: String },
  exchanges: { type: Number },
  markets: { type: Number },
  pairs: { type: Number },
  categories: { type: [String] },
  allTimeHighUSD: { type: Number },
  circulatingSupply: { type: Number },
  totalSupply: { type: Number },
  maxSupply: { type: Number },
  code: { type: String },
  rate: { type: Number },
  volume: { type: Number },
  cap: { type: Number },
  delta: DeltaSchema,
})

// * Model

export const CryptoModel = model<Cryptocurrency>("cryptocurrencies", CryptoSchema)
