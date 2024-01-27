const Joi = require('joi');

const createComment = {
	body: Joi.object().keys({
		blogId: Joi.string()
			.required(),
		content: Joi.string()
			.required()
	})
};

module.exports = {
	createComment
};
