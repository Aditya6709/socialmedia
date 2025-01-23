const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/aditya'
mongoose.connect(mongoURL,{
   // useNewURLParser:true,
   // useUnifiedTopology :true
})
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB ')
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
});


 

module.exports=db;