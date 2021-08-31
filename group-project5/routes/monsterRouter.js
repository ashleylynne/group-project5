const express = require("express")
const monsterRouter = express.Router()
const Monster = require("../models/monsterSchema")
// const monstersData = require("./monstersData.js")


monsterRouter.get("/", (req, res, next) => {
        Monster.find((err, monsters) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(monsters)
        })
    })

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

    .get("/:monsterId", (req, res, next) => {
        Monster.findOne({_id: req.params.monsterId}, (err, monster)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(monster)
        })
    })

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