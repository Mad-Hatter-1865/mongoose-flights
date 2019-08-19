var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport : {
        type: String,
        enum: ['AUS','DAL','LAX', 'SEA']
    },
    arrival : {
        type: Date
    }
},{
    timestamps: true
});


 var flightSchema = new Schema({
     airline: {
         type: String,
         enum: ['American','Southwest','United']
     },
     flightNo: {
         type: Number,
         min: 10,
         max: 9999,
         required: true
     },
     departs: {
         type: Date,
         required: true,
         default: function() {
             return new Date().getFullYear();
         }
     },
     airport: {
         type: String,
         enum: ['AUS','DAL','LAX','SEA'],
         default: 'SEA'
     },
     destinations: [destinationSchema]
 }, {
     timestamps: true
 });

 module.exports = mongoose.model('Flight',flightSchema);