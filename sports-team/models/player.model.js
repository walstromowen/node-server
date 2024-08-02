const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: [true, 'Please enter playername']
        },
        lastname:{
            type: String,
        },
        rec:{
            type: Number,
            default: 0
        },
        tds:{
            type: Number,
            default: 0
        },
        yds:{
            type: Number,
            default: 0
        }
    }
);

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
