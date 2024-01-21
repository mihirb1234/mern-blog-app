const express =require('express');

const { getAllUsers, registerController, loginController } = require('../controllers/user.controller.js');

const router =express.Router();
//get all users
router.get('/all-users',getAllUsers)

//CREATE USER ||POST
router.post('/register',registerController)

//login

router.post('/login',loginController)
module.exports=router