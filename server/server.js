import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connetedDB from "./config/db.js"
import bookRoutes from "./Router/Book.js"
import MemberRoutes from "./Router/Member.js"

dotenv.config()

connetedDB()


const app = express()


app.use(cors({
    origin: [process.env.APPLICATION_URL]
}))
app.use(express.json())

app.use("/api/books", bookRoutes)
app.use("/api/members", MemberRoutes)



app.get("/", (req, res) => {
    res.send("Server Running Successfully")
})

const port = process.env.PORT


app.listen(port, () => {
    console.log("server Running on ", port)
})


