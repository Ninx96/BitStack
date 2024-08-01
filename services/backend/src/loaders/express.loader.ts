import express, { NextFunction, Response, Request, Application } from "express"
import cors from "cors"
import createHttpError, { HttpError } from "http-errors"
import config from "../config"
import { appRouter } from "../routers"

export default ({ app }: { app: Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get("/status", (req, res) => {
    res.status(200).end()
  })
  app.head("/status", (req, res) => {
    res.status(200).end()
  })

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Transforms the raw string of req.body into json
  app.use(express.json())
  // Load API routes
  app.use(config.api.prefix, appRouter())

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createHttpError(404))
  })

  app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
      },
    })
  })
}
