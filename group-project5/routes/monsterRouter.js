const express = require("express")
const monsterRouter = express.Router()
const Monster = require("../models/monsterSchema")


// get all
monsterRouter.get("/", (req, res, next) => {
        Monster.find((err, monsters) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(monsters)
        })
    })
    // create
    .post("/", (req, res, next) => {
        const newMonster = new Monster(req.body)
        newMonster.save((err, savedMonster) => {
            if(err){
                res.status(500)
                return next(err)
            }
                return res.status(201).send(savedMonster)
        })
    })
    // get one
    .get("/:monsterId", (req, res, next) => {
        Monster.findOne({_id: req.params.monsterId}, (err, monster)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(monster)
        })
    })
    // update
    .put("/:monsterId", (req, res, next) => {
        Monster.findOneAndUpdate(
            {_id: req.params.monsterId},
            req.body,
            {new: true},
            (err, updatedMonster) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedMonster)
            }
        )
    })

    // delete one
    .delete("/:monsterId", (req, res, next) => {
        Monster.findOneAndDelete(
            {_id: req.params.monsterId},
            (err, deletedMonster) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                res.status(201).send(`successfully deleted ${deletedMonster.species} from the databse!`)
            }
        )
    })
    // delete all
    .delete("/", (req, res, next) => {
        Monster.deleteMany((err, deletedMonsters) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(`successfully deleted ${deletedMonsters}!`)
        })
    })

// fake data test
// monsterRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(monstersData)
// })
    // fake data test 2
    // .post("/", (req, res) => {
    //     const newMonster = req.body
    //     monstersData.push(newMonster)
    //     res.status(200).send(newMonster)
    // })


module.exports = monsterRouter

