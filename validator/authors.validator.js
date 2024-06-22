const {param, query, body} = require("express-validator");


const validateCreateAuthor =  [
   body("title")
     .exists()
     .withMessage("Title of book is required")
     .isString()
     .withMessage("Title should be string"),
   body("content")
     .exists()
     .withMessage("Content is required")
     .isString()
     .withMessage("Content should be string")
     .isLength({ min: 5 })
     .withMessage("Content should be at least 5 characters"),
   body("category")
     .exists()
     .withMessage("Book date is required")
     .isDate()
     .withMessage("Date must be date"),
   body("name")
     .exists()
     .withMessage("Year is required")
     .isNumeric()
     .withMessage("Year must be numeric"),
   body("surname")
     .exists()
     .withMessage("Description is required")
     .isString()
     .withMessage("Description should be string")
     .isLength({ min: 500 })
     .withMessage("Description at least 500 characters"),
     body("image")
     .exists()
     .withMessage("Description is required")
     .isString()
     .withMessage("Description should be string")
     .isLength({ min: 500 })
     .withMessage("Description at least 500 characters")  
   ];

 const validateDeleteAuthor =  [
   param('title').notEmpty().withMessage("Title should exist to delete a book")
]

module.exports = {
   validateCreateAuthor,
   validateDeleteAuthor
}