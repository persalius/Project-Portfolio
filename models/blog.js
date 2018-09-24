const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BlogScheme = new Schema({
    title: {
        type: String,
        required: [true, "Укажите заголово статьи"]
    },
    
    body: {
        type: String,
        required: [true, "Укажите содержимое статьи"]
    },
    
    date: {
        type: Date,
        default: Date.now,
        required: [true, "Укажите дату публикации"]
    }
});

//просим mongoose сохранить можель для ее дальнейшего использования
mongoose.model("blog", BlogScheme);