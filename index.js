const express = require("express")
const cors = require("cors")
const db = require("./db.js")

const app = express()
app.use(cors({origin:true}))
db.conn

app.use(express.urlencoded())
app.use(express.json({ "limit": '200mb' }))

require("./router.js")(app)

const port = process.env.port || 2000

app.listen(port)