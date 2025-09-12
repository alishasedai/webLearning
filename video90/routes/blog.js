const express = require('express');
const router = express.Router()

//middleware that is specific to this riuter

router.use((req, res, next) => {
    console.log('Time : ',Date.now())
    next()
})

// define the home page routes

router.get('/', (req, res) => {
    res.send('Birds home page')
})
router.get('/about', (req, res) => {
    res.send("about birds")
})

module.exports = router