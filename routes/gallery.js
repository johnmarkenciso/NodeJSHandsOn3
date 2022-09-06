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
let imgData = [{id:1,billionare:"Elon Musk",imgLink:"https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg?v=1533926309&w=740&h=416&ffmt=webp"},
{id:2,billionare:"Larry Page",imgLink:"https://imageio.forbes.com/specials-images/imageserve/5de7d8c0b269e900075d5ecb/0x0.jpg?format=jpg&crop=3214,1807,x0,y106,safe&width=1200"},
{id:3,imgLink:"https://i.insider.com/61b903c50ee2240018a77501?width=1136&format=jpeg"},
{id:4,billionare:"Jeff Bezos",imgLink:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_174890031_388813.jpg"},
{id:5,billionare:"Michael S. Dell",imgLink:" https://www.incimages.com/uploaded_files/image/1920x1080/dell_39838.jpg"},
{id:6,billionare:"Mark Zuckerberg",imgLink:" https://cdn.vox-cdn.com/thumbor/PW7iXZ5hfZYgeqJNDfSDgnW2nU4=/0x0:2040x1360/1200x800/filters:focal(722x96:1048x422)/cdn.vox-cdn.com/uploads/chorus_image/image/51810311/DSC01391.0.0.jpg"},
{id:7,billionare:"Sergey Brin",imgLink:" https://www.incimages.com/uploaded_files/image/1920x1080/getty_152766135_82765.jpg"},{id:8,billionare:"Jack Dorsey",imgLink:" https://assets2.cbsnewsstatic.com/hub/i/r/2019/10/30/22e1c484-0add-4713-b2d2-e7f06292c7ee/thumbnail/1200x630g2/531d039017353a6fdec68345626e559e/jack-dorsey-twitter-logo.jpg"}];



GalleryRouter.get("/", (req,res)=>{
    res.render('gallery', {data:imgData});
    
    })


    GalleryRouter.get('/:id',(req, res)=>{
        //find items by id
        let id  = parseInt(req.params.id);
        let check = imgData.find((item)=>{
            return item.id === id;
        });
        //verify the data by id
        if(check){
            //res.status(201).json(check);
            res.render('view', {data: check});
        }else{
            res.status(404).send('ID not found!');
        }
    });

    GalleryRouter.get('/edit/:id',(req, res)=>{
        //find items by id
        let check = imgData.find((item)=>{
            return item.id === parseInt(req.params.id)
        });
        //verify the data by id
        if(check){
            //res.status(201).json(check);
            res.render('edit', {data: check});
        }else{
            res.status(404).send('ID not found!');
        }
    });


    //update
      GalleryRouter.post('/update/:id',(req, res)=>{
        let id = parseInt(+req.params.id);
        let body = req.body;
        let index = imgData.findIndex((df)=>df.id === id);
        if(id >=0){
           let updateData = {id:id, ...body};
           imgData[index] =  updateData;
          res.status(200).redirect('/gallery');
        }else{
            res.status(404).send('Id does not exist');
        }
      });


      //add
     GalleryRouter.post('/add', (req, res)=>{
        let body = req.body;
        //let id = +req.params.id;
        imgData.push(body);
        console.log(imgData);
        res.redirect('/gallery');
        //res.status(201).json(body);
        });


        //delete
        GalleryRouter.get('/delete/:id',(req, res)=>{
            let id = +req.params.id;
            let index = imgData.findIndex((df)=>df.id === id);
            if(id>=-1){
                imgData.splice(index, 1);
                res.redirect('/gallery');
          }else{
            
              res.status(404).send('ID not found');
         
          }
          });



    module.exports = GalleryRouter;