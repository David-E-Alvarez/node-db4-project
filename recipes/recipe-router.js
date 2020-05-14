const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req,res) => {
    db('recipes')
        .then(recipes => {
            console.log('recipes', recipes)
            res.status(201).json(recipes)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/', (req,res) => {
    db('recipes').insert(req.body)
        .then(recipe => {
            console.log("recipe in post", recipe)
            res.status(201).json(recipe)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;