let AUTHOR = require('../model/author')

exports.Createauthor = async function(req,res,next){
    try {
        let Createauthor = await AUTHOR.create(req.body)
        res.status(201).json({
            status : "success",
            message : "Author Create",
            data : Createauthor
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "Author Not Create "
        })
    }
}
exports.Findauthor = async function(req,res,next){
    try {
        let Findauthor = await AUTHOR.find().populate('books')
        if(!Findauthor){throw new Error ('not found author')}
        res.status(201).json({
            status : "success",
            message : "author Find ",
            data : Findauthor
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "author Not found "
        })
    }
}
exports.FindOneauthor = async function(req,res,next){
    try {
        let FindOneauthor = await AUTHOR.findById(req.params.id)
        if(!FindOneauthor){throw new Error ('not found author')}
        res.status(201).json({
            status : "success",
            message : "author Find ",
            data : FindOneauthor
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "author Not found "
        })
    }
}
exports.updateauthor = async function(req,res,next){
    try {
        let Updateauthor = await AUTHOR.findByIdAndUpdate(req.params.id , req.body , {new : true})
      
        res.status(201).json({
            status : "success",
            message : "author update ",
            data : Updateauthor
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "author Not Update "
        })
    }
}
exports.deleteauthor = async function(req,res,next){
    try {
        let Deleteauthor = await AUTHOR.findByIdAndDelete(req.params.id)
        if(!Deleteauthor){throw new Error('not found author')}
        res.status(201).json({
            status : "success",
            message : "Author Delete" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "Author Not Delete "
        })
    }
}