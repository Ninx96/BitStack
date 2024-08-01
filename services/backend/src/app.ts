import config from "./config"
import express from "express"
import initDB from "./loaders/mongo.loader"
import initApp from "./loaders/express.loader"
import initJobs from "./jobs"

async function bootstrap() {
  try {
    const app = express()
    await initDB()
    initApp({ app })
    initJobs()

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`)
    })
    app.on("error", (err) => {
      throw err
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

bootstrap()
