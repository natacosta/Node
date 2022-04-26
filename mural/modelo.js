const mongoose = require("mongoose")

const LinkSquema  = new mongoose.Schema({

    titulo:String,
    url:String,
    descri:String,
    data:{type: Date, default: Date.now}
})

module.exports = linkModel = mongoose.model("Link", LinkSquema)