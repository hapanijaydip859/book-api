var express = require('express');
var router = express.Router();
let controller = require('../controller/author')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create' , controller.Createauthor)
router.get('/find' , controller.Findauthor)
router.get('/find/:id' , controller.FindOneauthor)
router.patch('/update/:id' , controller.updateauthor)
router.delete('/delete/:id' , controller.deleteauthor)
module.exports = router;