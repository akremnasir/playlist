const Album = require('../models/album')
const { StatusCodes } = require("http-status-codes");

const viewAll = async (req, res) =>{
    const { title, artistName, genere} = req.query;
    const queryObject = {};
    if(title){
      queryObject.title = title
    }
    if(artistName){
        queryObject.artistName = artistName
    }
    if(genere){
        queryObject.genere = genere
    }
    if(title){
        queryObject.title = title
    }
    const album = await Album.find(queryObject);
    if (!album) {
       return res.status(StatusCodes.NOT_FOUND).json({ success: false, msg: 'can not find the required album'});
    }
    res.status(StatusCodes.OK).json({ success: true, album, nbhits: album.length });
}
const viewone = async (req, res) =>{
    const { id: albumId } = req.params;
    const album = await Album.find({ _id: albumId });
    if (!album) {
       return res.status(StatusCodes.NOT_FOUND).json({ success: false, msg: 'can not find the required album'});
    }
    res.status(StatusCodes.OK).json({ success: true, album });
}
const create = async(req, res) =>{
    const albumWithCover = {
        ...req.body,
        cover: req.file.path 
      };
      const album = await Album.create({ ...albumWithCover});
      if (!album) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not create album'});
    }
      res.status(StatusCodes.CREATED).json({ msg: "created successfully", _id: album._id, album});

}
const update = async(req, res) =>{
    const { id: albumId } = req.params;
    const albumWithCover = {
        ...req.body
      };
    if(req.file){
        albumWithCover.cover = req.file.path
    }
    const album = await Album.findByIdAndUpdate({ _id: albumId }, albumWithCover, {
      new: true,
      runValidators: true,
    });
    if (!album) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not update album'});
    }
    res.status(StatusCodes.OK).json({ status: true, album });
}
const deleteOne = async (req, res) =>{
    const { id: albumId } = req.params;
    const album = await Album.findOneAndDelete({ _id: albumId });
    if (!album) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not delete album'});
    }
    res.status(StatusCodes.OK).json({ ststus: true });
}
module.exports = {viewAll, viewone, create, update, deleteOne}