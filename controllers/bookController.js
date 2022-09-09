const Books = require('../models/Book');

const books_index = (req, res) => {
    Books.find().sort({createdAt: -1})
    .then((result) => {
        res.render('bookLibrary',{title:"Library", books: result})
    })
    .catch(err => console.log(err))
}

const books_find = (req,res) => {
    const id = req.params.id;
    Books.findById(id)
    .then((result) => {
        res.render('find', {books: result, title: "Book Detail"})
    })
    .catch(err => console.log(err))
}


const books_search = (req,res) => {
    const id = req.body;
    Books.find(id)
    .then((result) => {
        res.render('result', {books: result, title: "Book Detail"})
    })
    .catch(err => console.log(err))
}


const books_add = (req, res) => {
    // console.log(req.body);
    const book = new Books(req.body)
    book.save()
    .then(result => res.redirect("/library"))
    .catch(err => console.log(err))
}

const books_update = (req, res) => {
    const id = req.params.id;
    Books.findById(id)
    .then((result) => {
        res.render('update', {books: result, title: "Book Detail"})
    })
    .catch(err => console.log(err))
}

const books_toUpdate = async (req, res) => {
    let id = req.params.id;

  let bookUpdate = await Books.findByIdAndUpdate(id, {
        title: req.body.title,
        order: req.body.order,
        completed: req.body.completed,
        author: req.body.author,
        bookImgcover: req.body.bookImgcover
    })

    if(!bookUpdate) return res.status(404).send(`Book can't be updated`);
    res.redirect('/library')
    
}

const books_delete = async (req, res) => {
    const id = req.params.id;
  const deleteBook = await  Books.findByIdAndDelete(id)
  
  if(!deleteBook){
    return res.status(404).send(`Book can't be deleted`);
  }
  res.redirect('/library');
}

// const books_delete = async (req, res) => {
//     try {
//     const id = req.params.id;
//   const deleteBook = await  Books.findByIdAndDelete(id);
//   if(!deleteBook) return res.status(404).send('Book not found')
//   res.redirect('/')
// } catch (error){
//     res.status(400).send(error.message);
// }
// }

const books_addPage = (req, res) =>{
    const id = req.params.id;
    Books.findById(id)
    .then((result) => {
        res.render('update', {books: result, title: "Book Update"})
    })
    .catch(err => console.log(err))
}


module.exports = {
    books_index,
    books_find,
    books_update,
    books_toUpdate,
    books_delete,
    books_add,
    books_addPage,
    books_search
}