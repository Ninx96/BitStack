import { CronJob } from "cron"
import config from "../config"
import { saveCrypto } from "../data/stores/mongo/crypto.store"
import { getCurrencyData } from "../providers/crypto.provider"

export async function callback() {
  try {
    for (const code of config.cryptoCodes) {
      const data = await getCurrencyData(code)
      await saveCrypto(data)
    }
  } catch (err) {
    console.error(err)
  }
}

export default new CronJob("0 */1 * * * *", callback)
