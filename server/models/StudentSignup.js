const mongoose = require('mongoose')
const studentsignupSchema =new mongoose.Schema({

    //student details
    studentname: String,
    studentemail: String,
    studentdepartment:String,
    studentpassword: String

},{timestamps: true})
module.exports = mongoose.model('StudentSignup', studentsignupSchema);



