import axios from "axios"

const httpClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export async function getCryptosRequest(): Promise<string[]> {
  try {
    const res = await httpClient.get("/crypto/codes")
    if (res.data.isValid) return res.data.payload
    return []
  } catch (err) {
    console.error("Error while fetching cryptos list", err)
    return []
  }
}

export async function getCryptoStatsRequest(code: string): Promise<any> {
  try {
    const res = await httpClient.get(`/crypto/${code}`)
    if (res.data.isValid) return res.data.payload[0]
    return null
  } catch (err) {
    console.error("Error while fetching crypto stats", err)
    return null
  }
}
