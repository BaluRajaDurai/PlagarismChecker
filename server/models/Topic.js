const mongoose = require('mongoose')
const topicSchema =new mongoose.Schema({

    //faculty details
    topic:String,
    sub:String,
    sbranch:String,
    edate:Date,
    dtime:String,
    docname:String
   
},{timestamps: true})
module.exports = mongoose.model('Topic', topicSchema);
