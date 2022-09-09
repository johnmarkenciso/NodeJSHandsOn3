const express = require('express');
const app = express();
const libraryRouter = express.Router();

const bookController = require('../controllers/bookController');


libraryRouter.get("/", bookController.books_index);
libraryRouter.post("/add", bookController.books_add);
libraryRouter.get("/:id", bookController.books_find);
libraryRouter.delete("/delete/:id", bookController.books_delete);
libraryRouter.get("/update/:id", bookController.books_update);
libraryRouter.put("/update/:id", bookController.books_toUpdate);
libraryRouter.get("/search/:id", bookController.books_search);

module.exports = libraryRouter;