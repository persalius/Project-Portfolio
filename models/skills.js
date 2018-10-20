const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BlogScheme = new Schema({
    javascript: {
        type: String,
        required: [false]
    },
    
    jquery: {
        type: String,
        required: [false]
    },
    
    html: {
        type: String,
        required: [false]
    },
    
    css: {
        type: String,
        required: [false]
    },
    
    scss: {
        type: String,
        required: [false]
    },
    
    pug: {
        type: String,
        required: [false]
    },
    
    git: {
        type: String,
        required: [false]
    },
    
    webpack: {
        type: String,
        required: [false]
    },
    
    node: {
        type: String,
        required: [false]
    },
    
    mongo: {
        type: String,
        required: [false]
    },
    
    illustrator: {
        type: String,
        required: [false]
    },
    
    photoshop: {
        type: String,
        required: [false]
    }
});

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model("skills", BlogScheme);
















