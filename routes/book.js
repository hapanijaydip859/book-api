var express = require('express');
var router = express.Router();
let Contbooks = require('../controller/book')
/* GET home page. */
router.post('/create' , Contbooks.Createbook)
router.get('/Find' , Contbooks.Findbook)
router.get('/Find/:id' , Contbooks.FindOnebook)
router.get('/Update/:id' , Contbooks.updatebook)
router.get('/Delete/:id' , Contbooks.deletebook)




module.exports = router;
