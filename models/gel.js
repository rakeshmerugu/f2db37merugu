const mongoose = require("mongoose")
const gelSchema = mongoose.Schema({
    Gel_Name: {type: String,required: [true, 'Name of the Gel cannot be empty']},
    Gel_Company: {type: String,required: [true,'Company of the Gel cannot be empty']},
    Gel_Size:{type: String,required:[true,'Size of the Gel cannot be empty']},
    Gel_Rating:{type: String,required:[true,'Rating of the Gel cannot be empty']}
})

module.exports = mongoose.model("Gel",
gelSchema)