let USERS = require('../model/users')
const jwt = require('jsonwebtoken');

exports.sequre = async function (req, res, next) {  
    try {
      let token = req.headers.authorization
      if (!token) {throw new Error("Please Attach token")}
      var decoded = jwt.verify(token, 'SURAT')
      console.log(decoded,"dd");
      let userCheck = await USERS.findById(decoded.id)
      console.log(userCheck,"ffff");
      if (!userCheck) {throw new Error("user not found")}
      next()
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  }
exports.Signuser = async function(req,res,next){
    try { 
        let Createuser = await USERS.create(req.body)
        res.status(201).json({
            status : "success",
            message : "user Create",
            data : Createuser
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not Create "
        })
    }
}
exports.Loginuser = async function(req,res,next){
    try { 
        let loginuser = await USERS.findOne({email : req.body.email})
        let Passworduser = await USERS.findOne({password : req.body.password})
        if(!loginuser){throw new Error('Wrong Email !')}
        if(!Passworduser){throw new Error('wrong password')}
        let token = jwt.sign({id : loginuser._id}, 'SURAT') 
         res.status(201).json({
            status : "success",
            message : "user login",
            data : loginuser,token
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not login "
        })
    }
}
exports.FindUser = async function(req,res,next){
    try {
        let Finduser = await USERS.find().populate('favorites')
        if(!Finduser){throw new Error ('not found user')}
        res.status(201).json({
            status : "success",
            message : "User Find ",
            data : Finduser
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not found "
        })
    }
}
exports.FindOneUser = async function(req,res,next){
    try {
        let FindOneuser = await USERS.findById(req.params.id)
        if(!FindOneuser){throw new Error ('not found user')}
        res.status(201).json({
            status : "success",
            message : "user Find ",
            data : FindOneuser
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not found "
        })
    }
}
exports.updateUser = async function(req,res,next){
    try {
        let Updateuser = await USERS.findByIdAndUpdate(req.params.id , req.body , {new : true})
      
        res.status(201).json({
            status : "success",
            message : "user update ",
            data : Updateuser
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not Update "
        })
    }
}
exports.deleteUser = async function(req,res,next){
    try {
        let Deleteuser = await USERS.findByIdAndDelete(req.params.id)
        if(!Deleteuser){throw new Error('user not found')}
        res.status(201).json({
            status : "success",
            message : "user Delete" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "user Not Delete "
        })
    }
}