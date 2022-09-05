const express = require('express');
const app = express();
const GalleryRouter = express.Router();


//front-end
app.set('views', './views');
app.set('view engine', 'ejs');

GalleryRouter.get("/", (req,res)=>{
    res.render('gallery', {});
    
    })
    
    module.exports = GalleryRouter;