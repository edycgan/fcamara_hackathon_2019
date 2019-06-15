// Edyr, Bruno
let fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
    res.render("C:\\Users\\edyrc\\pro\\fcamaragerenciadorfila\\client\\index.ejs")
});

module.exports = router;
