let GENRE = require('../model/genre')

exports.Creategenre = async function(req,res,next){
    try {
        let Creategenre = await GENRE.create(req.body)
        res.status(201).json({
            status : "success",
            message : "Genre Create",
            data : Creategenre
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "Genre Not Create "
        })
    }
}
exports.Findgenre = async function(req,res,next){
    try {
        let Findgenre = await GENRE.find().populate('popularBooks')
        if(!Findgenre){throw new Error ('not found genre')}
        res.status(201).json({
            status : "success",
            message : "genre Find ",
            data : Findgenre
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "genre Not found "
        })
    }
}
exports.FindOnegenre = async function(req,res,next){
    try {
        let FindOnegenre = await GENRE.findById(req.params.id)
        if(!FindOnegenre){throw new Error ('not found genre')}
        res.status(201).json({
            status : "success",
            message : "genre Find ",
            data : FindOnegenre
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "genre Not found "
        })
    }
}
exports.updategenre = async function(req,res,next){
    try {
        let Updategenre = await GENRE.findByIdAndUpdate(req.params.id , req.body , {new : true})
      
        res.status(201).json({
            status : "success",
            message : "genre update ",
            data : Updategenre
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "genre Not Update "
        })
    }
}
exports.deletegenre = async function(req,res,next){
    try {
        let Deletegenre = await GENRE.findByIdAndDelete(req.params.id)
        if(!Deletegenre){throw new Error('user not found')}
        res.status(201).json({
            status : "success",
            message : "genre Delete" 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : "genre Not Delete "
        })
    }
}