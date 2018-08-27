const mongoose = require('mongoose');

let connectionSchema = mongoose.Schema({

    fromCityId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fromCityName:{
        type: String,
        required: true
    },
    toCityId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    toCityName:{
        type: String,
        required: true
    },
    durationInMinutes:{
        type: Number,
        required: true
    },
    ticketPriceInEUR:{
        type: Number,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }

    
    
    });



    let Connection = module.exports = mongoose.model('Connection', connectionSchema);



    module.exports.getConnections = function(callback, limit) {
        
        Connection.find(callback).limit(limit);
    }

    module.exports.getConnectionById = function(id, callback) {
        
        Connection.findById(id, callback);
    }

    module.exports.addConnection = function(connectionName, callback) {
        
        return Connection.create(connectionName, callback);
    }

    module.exports.deleteConnectionById = function(id, callback) {

        Connection.remove({ _id: id }, callback);
    }