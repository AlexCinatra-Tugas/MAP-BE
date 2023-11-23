import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())

server.listen(process.env.SERVER_PORT, () => {
    console.log(`server up and running in ${process.env.SERVER_PORT}`)
})
