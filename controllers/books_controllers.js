const router = require("express").Router();
const books = require('../models/books')


// Index:
books.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

