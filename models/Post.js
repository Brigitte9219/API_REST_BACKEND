const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true, // Cambiado de 'require' a 'required'
        unique: true // Si el título debe ser único
    },
    description:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Post',PostSchema);