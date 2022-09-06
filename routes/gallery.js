const express = require('express');
const app = express();
const GalleryRouter = express.Router();


//front-end
app.set('views', './views');
app.set('view engine', 'ejs');

//static files (css and img)
app.use(express.static('public'));
app.use('/style',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));

//data
let imgData = [{id:1, imgLink:"https://images.unsplash.com/photo-1662368356814-1266785c9d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{id:2,imgLink:"https://images.unsplash.com/photo-1662377088176-310d11be8be1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{id:3,imgLink:"https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{id:4,imgLink:"https://images.unsplash.com/photo-1662377684735-6f33e9ba10c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{id:5,imgLink:"https://images.unsplash.com/photo-1662392127470-d5354782880e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"}];



GalleryRouter.get("/", (req,res)=>{
    res.render('gallery', {data:imgData});
    
    })
    
 GalleryRouter.post('', (req, res)=>{
        let body = req.body;
        //let id = +req.params.id;
        imgData.push(body);
        console.log(imgData);
        res.redirect('gallery');
        //res.status(201).json(body);
        });




    module.exports = GalleryRouter;