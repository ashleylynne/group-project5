const express = require("express")
const app = express()
const monsterRouter = require("./monsterRouter")
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(
    "/monsters", 
    express.json(),
    morgan("dev"), 
    (req, res, next) => {
    console.log("MIDDLEWARE")
    next()
})

mongoose.connect("mongodb://localhost:27017/monstersdb",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log("connected to the db!")
)

app.use("/monsters", monsterRouter)

// error handler
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("port 9000, we in there!")
})
