const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Require Routes
const HomeRouter = require('./routes/home');
const AboutRouter = require('./routes/about');
const GalleryRouter = require('./routes/gallery');


//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//front-end middleware
app.set('views', './views');
app.set('view engine', 'ejs')

//static files (css and img)
app.use(express.static('public'));
app.use('/style',express.static(__dirname+'/public/css'));
app.use('img',express.static(__dirname+'/public/img'));

//Routes Here
app.use("/", HomeRouter);
app.use("/about", AboutRouter);
app.use("/gallery",GalleryRouter);

//Connection
const port = 8080;
app.listen(port,()=>{
    console.log(`Connection succesfull Port:${port}`);
})