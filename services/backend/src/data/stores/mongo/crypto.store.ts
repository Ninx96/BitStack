import { Cryptocurrency, CryptoModel } from "../../models/crypto.model"

export function saveCrypto(data: Cryptocurrency) {
  return CryptoModel.create(data)
}

export function getRecentCryptoData(code: string, limit?: number) {
  return CryptoModel.find({ code })
    .sort({ _id: -1 })
    .limit(limit || 20)
}
