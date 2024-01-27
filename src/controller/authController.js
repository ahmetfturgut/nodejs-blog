const Status = require('http-status');
const { userService } = require('../service/service.index');
const { sendSuccessResponse, sendErrorResponse } = require('../middlewares/apiResponse');


exports.login = async (req, res, next) => {
	try {
		const result = await userService.authenticateUser(req.body.email, req.body.password);

		return sendSuccessResponse(res, result);
	} catch (error) {
		sendErrorResponse(res, error.message, Status.BAD_REQUEST);
	}

	next();
};
