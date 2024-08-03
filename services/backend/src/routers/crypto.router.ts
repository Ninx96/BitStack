import { Router, Request, Response, NextFunction } from "express"
import config from "../config"
import { filterStatsByCrypto } from "../data/stores/mongo/crypto.store"

const route = Router()

export default (app: Router) => {
  app.use("/crypto", route)

  route.get("/codes", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = config.cryptoCodes
      return res.status(200).json({ isValid: true, payload: data })
    } catch (e) {
      return next(e)
    }
  })

  route.get("/:code", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code } = req.params
      const data = await filterStatsByCrypto(code)
      return res.status(200).json({
        isValid: data.length ? true : false,
        payload: data,
      })
    } catch (e) {
      return next(e)
    }
  })
}
