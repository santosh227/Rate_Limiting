const express = require('express')
const multer = require('multer')
const {createAPI,getAPI,updateAPI,deleteAPI} = require('../controllers/crud-controller')
const {RegisterUser,loginUser} = require('../controllers/Auth-controller')
const {authMiddleware} = require('../middleware/Auth_middleware')

const router = express.Router()



router.post('/create',authMiddleware,createAPI )
router.get('/get',getAPI )
router.patch('/update/:id',updateAPI )
router.patch('/delete/:id',deleteAPI )


router.post('/register', RegisterUser);
router.post('/login', loginUser);






module.exports = router;