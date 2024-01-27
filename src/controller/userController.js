const Status = require('http-status');
const { userService } = require('../service/service.index');
const { sendSuccessResponse, sendErrorResponse } = require('../middlewares/apiResponse');

exports.createUser = async (req, res, next) => {
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const result = await userService.createUser(user);

        if (!result.success) {
            return sendErrorResponse(res, result, Status.NOT_ACCEPTABLE);
        } else {
            return sendSuccessResponse(res, result);
        }
    } catch (error) {
        sendErrorResponse(res, error.message, Status.BAD_REQUEST);
    }

    next();
};