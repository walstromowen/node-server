const Player = require('../models/player.model.js')

const getPlayers = async(req, res)=>{
    try{
        const players =  await Player.find({});
        res.status(200).json(players);
     }catch(error){
         res.status(500).json({message: error.message});
     }
}
const getPlayer = async (req, res)=>{
    try{
        const {id} =  req.params;
        const player = await Player.findById(id);
        res.status(200).json(player);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const addPlayer = async (req, res)=>{
    try{
       const player =  await Player.create(req.body)
       res.status(200).json(player);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const updatePlayer = async (req, res)=>{
    try{
        const {id} =  req.params;
        const player = await Player.findByIdAndUpdate(id, req.body);
        if(!player){
            return res.status(404).json({message: 'Player not found'})
        }
        const updatedPlayer = await Player.findById(id);
        res.status(200).json(updatedPlayer);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const deletePlayer = async (req, res)=>{
    try{
        const {id} =  req.params;
        const player = await Player.findByIdAndDelete(id);
        if(!player){
            return res.status(404).json({message: 'Player not found'})
        }
        res.status(200).json({message: 'Player sucessfully deleted'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

//Custom Queries using Endpoints
const getPlayerMostTds = async (req, res)=>{
    try{
        const player = await Player.find({}).sort({tds: -1}).limit(1);
        res.status(200).json(player);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const getPlayerMostYds = async (req, res)=>{
    try{
        const player = await Player.find({}).sort({yds: -1}).limit(1);
        res.status(200).json(player);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const getPlayerLeastYds = async (req, res)=>{
    try{
        const player = await Player.find({}).sort({yds: 1}).limit(1);
        res.status(200).json(player);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const getPlayersMostToLeastRec = async (req, res)=>{
    try{
        const players = await Player.find({}).sort({yds: -1});
        res.status(200).json(players);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const getPlayerByFirstName = async (req, res)=>{
    try{
        const {firstname} =  req.params;
        const players = await Player.find({firstname: firstname}).sort({yds: 1}).limit(1);
        res.status(200).json(players);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
module.exports = {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer, getPlayerMostTds, getPlayerMostYds, getPlayerLeastYds, getPlayersMostToLeastRec, getPlayerByFirstName};