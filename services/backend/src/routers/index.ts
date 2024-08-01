import { Router } from "express"
import cryptoRouter from "./crypto.router"

export function appRouter() {
  const app = Router()
  cryptoRouter(app)

  return app
}
