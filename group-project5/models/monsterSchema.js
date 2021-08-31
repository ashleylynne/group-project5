const mongoose = require("mongoose")
const Schema = mongoose.Schema

const monsterSchema = new Schema({
    species: {
        type: String,
        required: true
    },
    isHostile: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    shortDesc: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
    


})

module.exports = mongoose.model("Monster", monsterSchema)