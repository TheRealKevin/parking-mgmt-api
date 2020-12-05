const mongoose = require('mongoose');

const SettingsSchema = mongoose.Schema({
    rate : {
        type : Number,
    },
    level : {
        type : Number,
    },
    row : {
        type : Number
    }
})

module.exports = mongoose.model('Settings',SettingsSchema)