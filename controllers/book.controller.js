const Book=require("../models/book.model");
const express = require("express");
// const Book = require("../models/book.model");


const router = express.Router()

  const postBook = async (req, res) => {
    try {
        let book = await Book.create(req.body);
        await book.save();
    } catch (error) {        res.send({msg: "Error"});

    }
}

 const getAllBooks = async (req, res) => {
    try {
        let books = await Book.find({});
        res.send(books);
        // console.log(books)
    } catch (error) {        res.send({msg: "Error"});

    }
}

 const deleteBook = async (req, res) => {
   try {
      let book = await Book.findByIdAndDelete(req.params._id);
  
      res.status(201).send(book);
    } catch (err) {
      res.status(500).send(err.message);
    }
}

 const updateBook = async (req, res) => {
    try {

        let book = await Book.findByIdAndUpdate(req.params.id, req.body);
    } catch (error) {        res.send({msg: "Error"});

    }
}

module.exports={postBook ,deleteBook,updateBook,getAllBooks}
