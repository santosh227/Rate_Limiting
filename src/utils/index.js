const mongoose = require('mongoose')


const connection = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
       console.log('Mongoose connected successfully');
    }
    catch(error){
       console.error(' MongoDB connection error:', error.message);
    }
}

module.exports = {connection}