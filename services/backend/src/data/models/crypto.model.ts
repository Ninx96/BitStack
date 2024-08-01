import { Schema, model } from "mongoose"

// * Interface

export interface Cryptocurrency {
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
  code: { type: String },
  rate: { type: Number },
  volume: { type: Number },
  cap: { type: Number },
  delta: { type: DeltaSchema },
})

// * Model

export const CryptoModel = model<Cryptocurrency>("cryptocurrencies", CryptoSchema)
