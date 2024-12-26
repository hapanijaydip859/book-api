let REVIEW = require('../model/review')
exports.Createreview = async function(req,res,next){
    try {
        let createreview = await REVIEW.create(req.body)
        res.status(201).json({
            status : "success",
            message : "review Create",
            data : createreview
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "review Not Create "
        })
    }
}
exports.Findreview = async function(req,res,next){
    try {
        let findreview = await REVIEW.find().populate('book user')
        if(!findreview){throw new Error ('not found review')}
        res.status(201).json({
            status : "success",
            message : "review Find ",
            data : findreview
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "review Not found "
        })
    }
}
exports.FindOnereview = async function(req,res,next){
    try {
        let findOnereview = await REVIEW.findById(req.params.id)
        if(!findOnereview){throw new Error ('not found review')}
        res.status(201).json({
            status : "success",
            message : "review Find ",
            data : findOnereview
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "review Not found "
        })
    }
}
exports.updatereview = async function(req,res,next){
    try {
        let Updatereview = await REVIEW.findByIdAndUpdate(req.params.id , req.body , {new : true})
      
        res.status(201).json({
            status : "success",
            message : "review update ",
            data : Updatereview
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "review Not Update "
        })
    }
}
exports.deletereview = async function(req,res,next){
    try {
        let Deletereview = await REVIEW.findByIdAndDelete(req.params.id)``
        res.status(201).json({
            status : "success",
            message : "review Delete" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "review Not Delete "
        })
    }
}