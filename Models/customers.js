const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    statecode : {
        type : String,
        required : true
    },
    districtcode : {
        type : String,
        required : true
    },
    alphanum1 : {
        type : String,
        required : true
    },
    alphanum2 : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);