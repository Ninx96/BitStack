import { Router, Request, Response, NextFunction } from "express"
import config from "../config"
import { getRecentCryptoData } from "../data/stores/mongo/crypto.store"

const route = Router()

export default (app: Router) => {
  app.use("/crypto", route)

  route.get("/codes", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = config.cryptoCodes
      return res.status(200).json({ data })
    } catch (e) {
      return next(e)
    }
  })

  route.get("/:code", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code } = req.params
      const data = await getRecentCryptoData(code)
      return res.status(200).json({ data })
    } catch (e) {
      return next(e)
    }
  })
}
