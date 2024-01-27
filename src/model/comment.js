const mongoose = require('mongoose');
const { toJSON } = require('./plugins/plugins.index');

const { Schema } = mongoose;

const CommentSchema = new Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true
    },
    commenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});
 
CommentSchema.plugin(toJSON);

CommentSchema.pre('updateOne', function(next) {
    this._update.updatedDate = new Date();
    next();
});

const Comment = mongoose.model('comment', CommentSchema);

exports.Comment = Comment;