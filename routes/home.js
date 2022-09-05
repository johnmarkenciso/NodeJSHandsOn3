const express = require('express');
const app = express();
const HomeRouter = express.Router();


//front-end
app.set('views', './views');
app.set('view engine', 'ejs');

HomeRouter.get("/", (req,res)=>{
    res.render('index', {});
    
    })
    
    module.exports = HomeRouter;