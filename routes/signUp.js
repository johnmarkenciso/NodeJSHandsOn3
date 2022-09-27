const routerRegister = require('express').Router();
const validationReg = require('../controllers/validation')
const User = require('../models/user');
const bcrypt = require('bcrypt');


routerRegister.get('/',async (req,res)=>{
    User.find().sort({createdAt: -1}).then((users)=>{
        res.json(users);
    })
    // res.send("This is record");
})



routerRegister.post('/', async(req, res)=>{
//validation
const {error} = validationReg(req.body);

//hashing
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt)
//error handling
if(error) return res.status(400).send(error.details[0].message);
//check email existence
        const userEmail = await User.findOne({email:req.body.email});
    if(userEmail) return res.status(402).send("Email already used");
      const user = new User({
                            user_name : req.body.user_name, 
                            email : req.body.email,
                            password:hashPass,

                        })
    await user.save()
    .then(result => res.redirect('/library'))
    .catch(err => console.log(err));
})


module.exports = routerRegister;