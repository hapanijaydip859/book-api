var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
let Contuser = require('../controller/users')
/* GET home page. */
router.post('/create' , Contuser.Signuser)
router.post('/login' , Contuser.Loginuser)
router.get('/find' , Contuser.sequre,Contuser.FindUser)
router.get('/find/:id' ,Contuser.sequre, Contuser.FindOneUser)
router.patch('/update/:id' , Contuser.updateUser)
router.delete('/delete/:id' , Contuser.deleteUser)

module.exports = router;
