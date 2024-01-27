const Status = require('http-status');
const { sendSuccessResponse, sendErrorResponse } = require('../middlewares/apiResponse');

const { blogService } = require('../service/service.index');

exports.createBlog = async (req, res, next) => {
	try {
		let blog = {
			title: req.body.title,
			content: req.body.content,
			userId: req.userData.id
		}

		const result = await blogService.createBlog(blog);

		return sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

exports.getBlog = async (req, res, next) => {
	try {
		const result = await blogService.getBlog(req.params.id);

		if (!result) {
			return sendErrorResponse(res, 'Blog not found', Status.NOT_FOUND);
		} else {
			return sendSuccessResponse(res, result);
		}
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

exports.searchBlogs = async (req, res, next) => {
	try {
		const keyword = req.query.keyword;
		const result = await blogService.searchBlogs(keyword);

		sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

exports.getBlogs = async (req, res, next) => {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		const result = await blogService.getBlogs(page, limit);
		sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.INTERNAL_SERVER_ERROR);
	}

	next();
};

exports.updateBlog = async (req, res, next) => {
	try {
		const { title, content } = req.body;
		const id = req.params.id;

		const blog = await blogService.getBlog(id);
		if (!blog) {
			return sendErrorResponse(res, 'Blog not found', Status.NOT_FOUND);
		}

		if (blog.userId != req.userData.id) {
			return sendErrorResponse(res, 'Unauthorized access', Status.UNAUTHORIZED);
		}

		const result = await blogService.updateBlog({ id, title, content });

		sendSuccessResponse(res, result);

	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

exports.deleteBlog = async (req, res, next) => {
	try {
		const id = req.params.id;
		const blog = await blogService.getBlog(id);

		if (!blog) {
			return sendErrorResponse(res, 'Blog not found', Status.NOT_FOUND);
		}

		if (blog.userId != req.userData.id) {
			return sendErrorResponse(res, 'Unauthorized access', Status.UNAUTHORIZED);
		}

		const result = await blogService.deleteBlog(id);
		sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

exports.physicalDeleteBlog = async (req, res, next) => {
	try {
		const id = req.params.id;
		const blog = await blogService.getBlog(id);

		if (!blog) {
			return sendErrorResponse(res, 'Blog not found', Status.NOT_FOUND);
		}

		if (blog.userId != req.userData.id) {
			return sendErrorResponse(res, 'Unauthorized access', Status.UNAUTHORIZED);
		}

		await blogService.physicalDeleteBlog(id);
		sendSuccessResponse(res, Status.OK);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};

