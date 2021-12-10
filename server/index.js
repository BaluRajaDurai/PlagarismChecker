const fastify = require('fastify')()

fastify.register(require('fastify-cors'),{
})

const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://admin:admin123@mycluster.n4gnk.mongodb.net/plagiarismChecker?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(()=>{console.log("db connected")}).catch((error)=>{console.log("error",error)})

} catch (e) {
    console.error(e);
}

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ working: 'successfull' })
})

const StudentSignup = require("./models/StudentSignup")
const AddFaculty = require("./models/AddFaculty")
const AddTopic = require("./models/AddTopic")
const Topic = require("./models/Topic")

fastify.post('/studentsignup',async (req, reply) => { 
    try { 
        // console.log(req.body);
        const studentsignup = new StudentSignup(req.body)
        // console.log(studentsignup); 
        studentsignup.save();
        reply.send({studentsignup,"message": 'Student Created'})
    } 
    catch(error){
        console.log(error)
        reply.send ({ "error" : 'Creation Failed' })    
    } 
})

fastify.post('/addfaculty',async (req, reply) => { 
    try { 
        // console.log(req.body);
        const addfaculty = new AddFaculty(req.body)
        // console.log(addfaculty); 
        addfaculty.save();
        reply.send({addfaculty,"message": 'Faculty Created'})
    } 
    catch(error){
        console.log(error)
        reply.send ({ "error" : 'Creation Failed' })    
    } 
})

fastify.post('/addtopic',async (req, reply) => { 
    try { 
        // console.log(req.body);
        const addtopic = new AddTopic({...req.body,docname : ""})
        // console.log(addtopic); 
        addtopic.save();
        reply.send({addtopic,"message": 'Topic Created'})
    } 
    catch(error){
        console.log(error)
        reply.send ({ "error" : 'Creation Failed' })    
    } 
})

fastify.post('/topic',async (req, reply) => { 
    try { 
        console.log(req.body);
        const topic = new Topic(req.body)
        console.log(topic); 
        topic.save();
        reply.send({addtopic,"message": 'Topic Created'})
    } 
    catch(error){
        console.log(error)
        reply.send ({ "error" : 'Creation Failed' })    
    } 
})

fastify.get('/studentdetails', async (req, reply) => {
    try {
        const studentdetails = await  StudentSignup.find({});
        reply.code(200).send(studentdetails);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.get('/facultydetails', async (req, reply) => {
    try {
        const facultydetails = await  AddFaculty.find({});
        reply.code(200).send(facultydetails);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.get('/topicdetails', async (req, reply) => {
    try {
        const topicdetails = await AddTopic.find({});
        reply.code(200).send(topicdetails);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.delete('/deletefaculty/:id', async (req, reply) => {
    try {
        const id=req.params.id;
        // console.log(id)
        const facultydelete = await AddFaculty.findOneAndDelete({facultymail:id})
        // console.log("delete");
        reply.code(200).send(facultydelete);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.delete('/deletetopic/:id', async (req, reply) => {
    try {
        const id=req.params.id;
        // console.log(id)
        const facultydelete = await AddTopic.findOneAndDelete({topicname:id})
        // console.log("delete");
        reply.code(200).send(facultydelete);
      } catch (e) {
        reply.code(500).send(e);
      }
})

fastify.put('/updatetopic/:id', async (req, reply) => {
    try {
        const id=req.params.id;
        console.log(id)
        const topicupdate = await AddTopic.findByIdAndUpdate(id, { docname: req.body.docname },)
        console.log(topicupdate);
        reply.code(200).send(topicupdate);
      } catch (e) {
        reply.code(500).send(e);
      }
})




fastify.listen(5000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
})