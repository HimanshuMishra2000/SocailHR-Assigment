const Book=require("../models/book.model");
const express = require("express");
// const Book = require("../models/book.model");


const router = express.Router()


// router.post("/", async (req, res) => {
//     try {
//       const mensProducts = await MensProduct.create(req.body);
  
//       res.status(201).send(mensProducts);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
  
//   // getting and showing the products to front-end
  
//   router.get("/", async (req, res) => {
//     try {
//       const mensProducts = await MensProduct.find().lean().exec();
  
//       res.status(201).send(mensProducts);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
  
//   router.delete("/books/delete/:id", async (req, res) => {
//     try {
//       const book = await book.findByIdAndDelete(req.params._id);
  
//       res.status(201).send(book);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
  
//   router.get("/:_id", async (req, res) => {
//     //console.log('req.params.id: ', req.params._id);
//     try {
//       const mensProduct = await MensProduct.findById(req.params._id)
//         .lean()
//         .exec();
  
//       res.status(201).send(mensProduct);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });
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