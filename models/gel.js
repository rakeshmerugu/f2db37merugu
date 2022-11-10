const mongoose = require("mongoose")
const gelSchema = mongoose.Schema({
    Gel_Name: String,
    Gel_Company: String,
    Gel_cost: Number,
    Gel_Rating: Number
})

module.exports = mongoose.model("Gel",
gelSchema)