import express from "express"
import { creatBook, deleteOne, getAllBooks, getOneBook, UpdateOne } from "../controller/book.js"

const router = express.Router()

router.route("/").post(creatBook)
.get(getAllBooks)


router.route("/:id").get(getOneBook)
.put(UpdateOne)
.delete(deleteOne)




export default router