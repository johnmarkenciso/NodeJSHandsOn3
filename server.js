const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const methodOverride = require('method-override');


//express app
dotEnv.config();
const app = express();

//Require Routes
const HomeRouter = require('./routes/home');
const AboutRouter = require('./routes/about');
const GalleryRouter = require('./routes/gallery');
const viewRouter = require('./routes/view');
const editRouter = require('./routes/edit');
const libraryRouter = require('./routes/bookLibrary');

//static files (css and img)
app.use(express.static('public'));
app.use('/style',express.static(__dirname+'public/css'));
app.use('/img',express.static(__dirname+'public/img'));
app.use('/js',express.static(__dirname+'public/js'));

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//front-end middleware
app.set('views', './views');
app.set('view engine', 'ejs')

//Routes Here
app.use("/", HomeRouter);
app.use("/about", AboutRouter);
app.use("/gallery",GalleryRouter);
app.use("/view", viewRouter);
app.use("/edit",editRouter);
app.use("/library",libraryRouter)

//Connection
mongoose.connect(process.env.DB_CONNECT, ()=>{
    console.log('database connection is working')
    });
    
const port = 8080;
app.listen(port,()=>{
    console.log(`Connection succesfull Port:${port}`);
})