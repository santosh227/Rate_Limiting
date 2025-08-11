const express = require('express');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
const {connection} = require('./src/utils/index')
const PORT = process.env.PORT || 4000

const limiter = require('./src/utils/rateLimit')
const apiroutes = require('./src/routes/index')

///////////////////////Multer lib and connection ///////////////////////
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(limiter) // limiting the user 
connection()   // mongooose connection 
app.use('/api',apiroutes ) // api end point 

app.post('/uploads', upload.single('file'),(req,res)=>{
    res.send("succsess")
})





app.listen(PORT,()=>{
    console.log(`server runiing ruccessfully on ${PORT}`);
    
})

