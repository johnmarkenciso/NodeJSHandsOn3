const routerLogin = require('express').Router();
const User = require('../models/user');
const validationReg = require('../controllers/validation');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
require('dotenv/config');

routerLogin.get('/',(req, res)=>{
    res.render('signInUp',{title:"Login/Sign-Up"});
})


routerLogin.post('/', async (req, res)=>{

    const {error} = validationReg(req.body);

    const errorMsg = error.details[0].message;

    if(error) return res.status(400).redirect('/login'+errorMsg);

    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(402).send("Email Invalid");
    const userPassword = await bcrypt.compare(req.body.password, user.password)
    if(!userPassword) return res.status(402).send("Password not match");


    // const token = jwt.sign({name: user.name}, process.env.TOKEN_SECRET);
    // res.header('token',token).send(token);
    try {
        res.send('login page')
    } catch (error) {
        console.log(error)
    }

 
    
})




module.exports = routerLogin;