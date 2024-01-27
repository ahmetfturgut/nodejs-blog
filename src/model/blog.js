const mongoose = require('mongoose');

const { stateEnums } = require('./enums/enums.index');
const { toJSON } = require('./plugins/plugins.index');

const { Schema } = mongoose;

const BlogSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	state: {
		type: String,
		enum: [
			stateEnums.BlogState.Active,
			stateEnums.BlogState.Passive,
		],
		default: stateEnums.BlogState.Active
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	updatedDate: {
		type: Date,
		default: Date.now
	},
});

BlogSchema.index({ title: 'text', content: 'text' });

BlogSchema.plugin(toJSON);

BlogSchema.pre('updateOne', function (next) {
	this._update.updatedDate = new Date();
	next();
});

const Blog = mongoose.model('blog', BlogSchema);

Blog.createIndexes();

exports.Blog = Blog;