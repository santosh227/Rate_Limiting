const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const {connection} = require('./src/utils/index')
const PORT = process.env.PORT || 4000


const apiroutes = require('./src/routes/index')
app.use(express.json())
app.use(express.urlencoded({extended : true}))


connection()
 
app.use('/api',apiroutes )

app.listen(PORT,()=>{
    console.log(`server runiing ruccessfully on ${PORT}`);
    
})
