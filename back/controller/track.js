const Track = require('../models/track')
const { StatusCodes } = require("http-status-codes");

const viewAll = async (req, res) =>{
    const { title, artistName, genere, releseDate, liked, type, albumId} = req.query;
    const queryObject = {};
    if(title){
      queryObject.title = title
    }
    if(artistName){
        queryObject.artistName = artistName
    }
    if(title){
        queryObject.genere = genere
    }
    if(releseDate){
        queryObject.releseDate = releseDate
    }
    if(liked){
        queryObject.liked = liked
    }
    if(type){
        queryObject.type = type
    }
    if(albumId){
        queryObject._id = albumId
    }
    const track = await Track.find(queryObject);
    if (!track) {
       return res.status(StatusCodes.NOT_FOUND).json({ success: false, msg: 'can not find the required track'});
    }
    res.status(StatusCodes.OK).json({ success: true, track, nbhits: track.length });
}
const viewone = async(req, res) =>{
    const { id: trackId } = req.params;
    const track = await Track.find({ _id: trackId });
    if (!track) {
       return res.status(StatusCodes.NOT_FOUND).json({ success: false, msg: 'can not find the required track'});
    }
    res.status(StatusCodes.OK).json({ success: true, track });}
const create = async(req, res) =>{
    const trackWithCover = {
        ...req.body,
        cover: req.file.path 
      };
      const track = await Track.create({ ...trackWithCover});
      if (!track) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not create track'});
    }
      res.status(StatusCodes.CREATED).json({ msg: "created successfully", _id: track._id, track});
}
const update = async (req, res) =>{
    const { id: trackId } = req.params;
    const trackWithCover = {
        ...req.body
      };
    if(req.file){
        trackWithCover.cover = req.file.path
    }
    const track = await Track.findByIdAndUpdate({ _id: trackId }, trackWithCover, {
      new: true,
      runValidators: true,
    });
    if (!track) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not update track'});
    }
    res.status(StatusCodes.OK).json({ status: true, track });
}
const deleteOne = async (req, res) =>{
    const { id: trackId } = req.params;
    const track = await Track.findOneAndDelete({ _id: trackId });
    if (!track) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'can not delete track'});
    }
    res.status(StatusCodes.OK).json({ ststus: true });
}
module.exports = {viewAll, viewone, create, update, deleteOne}