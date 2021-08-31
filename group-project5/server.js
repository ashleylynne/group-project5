const express = require("express")
const app = express()
const monsterRouter = require("./routes/monsterRouter")
const mongoose = require("mongoose")
const morgan = require("morgan")

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use("/monsters", (req, res, next) => {
    console.log("MIDDLEWARE")
    next()
})

// connect to db
mongoose.connect("mongodb://localhost:27017/monstersdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log("connected to the db!")
)

// route
app.use("/monsters", monsterRouter)

// error handler
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})
// server port
app.listen(9000, () => {
    console.log("port 9000, we in there!")
})
