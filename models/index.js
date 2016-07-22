var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://192.168.99.100/library').connection;

db.on('open', function(){
    console.log('MongoDB is connected');
});

db.on('error', function(){
    console.log('Something went wrong during mongoDB connection');
});

return db;