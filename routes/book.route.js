const { Router } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const { postBook, getAllBooks, updateBook, deleteBook } = require("../controllers/book.controller")

const router = express.Router()

router.post("/books",postBook);

router.get("/books",getAllBooks);

router.post("/books/update/:id",updateBook);

router.delete("/books/delete/:id",deleteBook);

module.exports=router

