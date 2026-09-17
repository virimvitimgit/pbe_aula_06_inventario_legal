const express = require("express")
const router = express.Router()

const { creat, list } = require("./controller")

router.post("/bens", creat)
router.get("/bens", list)

module.exports = router