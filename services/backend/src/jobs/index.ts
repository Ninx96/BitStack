import uploadJob from "./upload.job"

export default () => {
  console.log("Starting all crons")
  uploadJob.start()
}
