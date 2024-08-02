const express = require('express');
const router = express.Router();
const {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer, getPlayerMostTds, getPlayerMostYds, getPlayerLeastYds, getPlayersMostToLeastRec, getPlayerByFirstName} = require('../controllers/player.controllers.js');

router.get('/get-all', getPlayers);
router.get('/get-one/:id', getPlayer)
router.post('/add', addPlayer)
router.put('/update-one/:id', updatePlayer);
router.delete('/delete-one/:id', deletePlayer);

router.get('/get-most-tds', getPlayerMostTds);
router.get('/get-most-yds', getPlayerMostYds);
router.get('/get-least-yds', getPlayerLeastYds);
router.get('/get-players-most-to-least-rec', getPlayersMostToLeastRec);
router.get('/get-by-firstname/:firstname', getPlayerByFirstName);

module.exports = router;