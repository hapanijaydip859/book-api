var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
let ContPublisher = require('../controller/publisher')
/* GET home page. */
router.post('/create' , ContPublisher.Createpulisher)
router.get('/find' , ContPublisher.Findpublisher)
router.get('/find/:id' , ContPublisher.FindOnepublisher)
router.patch('/update/:id' , ContPublisher.updatepublisher)
router.delete('/delete/:id' , ContPublisher.deletepublisher) 
module.exports = router;
