const mongoose = require('mongoose')
const addfacultySchema =new mongoose.Schema({

    //faculty details
    facultyname:String,
    facultydepartment:String,
    facultymail:String,
    facultypassword:String,

},{timestamps: true})
module.exports = mongoose.model('AddFaculty', addfacultySchema);


