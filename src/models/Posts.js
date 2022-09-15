const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imgURL: { type: String, required: false, default: 'encurtador.com.br/ahps3' },
    description: { type: String, required: true },
    text: { type: String, required: true, },
    createdAT: { type: Date, default: Date.now },
});

const PostsModel = mongoose.model('Posts', PostsSchema);

module.exports = Posts;