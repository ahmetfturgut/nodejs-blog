const Status = require('http-status');

const sendSuccessResponse = (res, result, message) => {
    res.status(Status.OK).json({
        status: Status.OK,
        success: true,
        error: null,
        data: result
    });
};

const sendErrorResponse = (res, errorMessage, status) => {
    res.status(status).json({
        status: status,
        success: false,
        error: errorMessage,
        data: null,
        message: 'Error'
    });
};

module.exports = { sendSuccessResponse, sendErrorResponse };