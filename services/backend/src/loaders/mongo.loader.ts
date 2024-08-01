import mongoose from "mongoose"
import { Db } from "mongodb"
import config from "../config"

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURI)
  console.log("DB connection established")
  return connection.connection.db
}
