import axios from "axios"
import { Cryptocurrency } from "../data/models/crypto.model"
import config from "../config"

const httpClient = axios.create({
  baseURL: config.provider.baseURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": config.provider.apiKey,
  },
})

export async function getCurrencyData(code: string, currency?: string): Promise<Cryptocurrency> {
  const response = await httpClient.post("/coins/single", {
    code,
    currency: currency || "USD",
    meta: true,
  })
  response.data.code = code
  return response.data
}
