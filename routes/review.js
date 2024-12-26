var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
let Contreview = require('../controller/review')
/* GET home page. */
router.post('/create' , Contreview.Createreview)
router.get('/find' , Contreview.Findreview)
router.get('/find/:id' , Contreview.FindOnereview)
router.patch('/update/:id' , Contreview.updatereview)
router.delete('/delete/:id' , Contreview.deletereview) 
module.exports = router;
