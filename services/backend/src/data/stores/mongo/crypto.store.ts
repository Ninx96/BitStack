import { Cryptocurrency, CryptoModel } from "../../models/crypto.model"

export function saveCrypto(data: Cryptocurrency) {
  return CryptoModel.create(data)
}

export function filterStatsByCrypto(code: string, limit?: number) {
  return CryptoModel.aggregate([
    {
      $match: {
        code,
      },
    },
    {
      $sort: {
        _id: -1,
      },
    },
    {
      $limit: limit || 20,
    },
    {
      $group: {
        _id: {
          code: "$code",
          name: "$name",
          symbol: "$symbol",
          webp64: "$webp64",
        },
        stats: {
          $push: {
            rate: "$rate",
            volume: "$volume",
            cap: "$cap",
            delta: "$delta",
          },
        },
      },
    },
  ])
}
