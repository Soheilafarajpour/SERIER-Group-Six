const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    authorID: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    journal: {
        type: String
    },
    volume: {
        type: Number,
        required: true
    },
    year : {
        type: Date,
        default: Date.now,
        required: true
    },
    number1: {
        type: Number,
        required: true
    },
    pages : {
        type: String
    },
    note : {
        type: String
    },
});

module.exports = mongoose.model('Article', ArticleSchema);
