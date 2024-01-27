
const { sendSuccessResponse, sendErrorResponse } = require('../middlewares/apiResponse');
const Status = require('http-status');

const { commentService, blogService } = require('../service/service.index');

exports.createComment = async (req, res, next) => {
	try {
		const comment = {
			blogId: req.body.blogId,
			commenterId: req.userData.id,
			content: req.body.content,
			userId: req.userData.id
		};

		const blog = await blogService.getBlog(comment.blogId);
		if (!blog) {
			return sendErrorResponse(res, 'Blog not found', Status.NOT_FOUND);
		}

		const result = await commentService.createComment(comment);
		sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};
