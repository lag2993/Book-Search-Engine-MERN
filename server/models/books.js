const {Schema} = require('mongoose');


const bookSchema = new Schema({
    bookId:{
        type: String,
        required: true,  
    },
    authors:[{
        type: String,
        required: true,
    },],
    description:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    link:{
        type: String,
    },

});

module.exports = bookSchema;
