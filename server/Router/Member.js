import express from "express"
import { creatMember, deleteOne, getAllMembers, getOneMember, UpdateOne } from "../controller/Member.js"

const router = express.Router()

router.route("/").post(creatMember)
.get(getAllMembers)


router.route("/:id").get(getOneMember)
.put(UpdateOne)
.delete(deleteOne)




export default router