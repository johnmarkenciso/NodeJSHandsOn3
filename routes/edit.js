const express = require('express');
const app = express();
const editRouter = express.Router();


//front-end
app.set('views', './views');
app.set('view engine', 'ejs');
//static files (css and img)
app.use(express.static('public'));
app.use('/style',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));

editRouter.get("/", (req,res)=>{
    res.render('view', {});
    
    })
    
    module.exports = editRouter;