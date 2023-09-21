const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    imageurl: String,
    details: String
})


export default mongoose.models.Post || mongoose.model('Post', PostSchema)