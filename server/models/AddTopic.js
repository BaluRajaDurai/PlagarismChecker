const mongoose = require('mongoose')
const addtopicSchema =new mongoose.Schema({

    //faculty details
    topicname:String,
    subject:String,
    branch:String,
    lastdate:Date,
    duetime:String,
    docname:String
   
},{timestamps: true})
module.exports = mongoose.model('AddTopic', addtopicSchema);
