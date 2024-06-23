const { body, param, query } = require("express-validator");

const validateCreateEntries = [
    body("title")
        .exists().withMessage("Title of entries is required")
        .isString().withMessage("Title should be string"),
    body("content")
        .exists().withMessage("Entries content is required")
        .isString().withMessage("Content should be string"),
    body("date")
        .exists().withMessage("Entries date is required")
        .isDate().withMessage("Date should be string"),
    body("email")
        .exists().withMessage("Entries email is required")
        .isEmail().withMessage("Valid email is required"),
    body("category")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string")
];

const validateGetEntries = [
  query('email').notEmpty().withMessage("Email should exist to get an entry")
  .isEmail().withMessage("Valid email is required"),
]

const validateDeleteEntry = [
    query('title').notEmpty().withMessage("Title should exist to delete an entry")
];

const validateUpdateEntry = [
  body("title")
  .exists().withMessage("Title of entries is required")
  .isString().withMessage("Title should be string"),
body("content")
  .exists().withMessage("Entries content is required")
  .isString().withMessage("Content should be string"),
body("date")
  .exists().withMessage("Entries date is required")
  .isDate().withMessage("Date should be a date"),
body("email")
  .exists().withMessage("Entries email is required")
  .isEmail().withMessage("Valid email is required"),
body("category")
  .exists().withMessage("Entries category is required")
  .isString().withMessage("Category should be string"),
  body("old_title")
  .exists().withMessage("Entries category is required")
  .isString().withMessage("Category should be string")
]
module.exports = {
    validateCreateEntries,
    validateDeleteEntry,
    validateGetEntries,
    validateUpdateEntry
};