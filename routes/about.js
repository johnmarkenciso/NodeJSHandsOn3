const express = require('express');
const app = express();
const AboutRouter = express.Router();


//front-end
app.set('views', './views');
app.set('view engine', 'ejs');

AboutRouter.get("/", (req,res)=>{
    res.render('about', {});
    
    })
    
    module.exports = AboutRouter;