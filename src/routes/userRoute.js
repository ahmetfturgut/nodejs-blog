const { userController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { validate } = require('../middlewares/middlewares.index');
const { userValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {

	/**
	 * Create User
	 */
	app.post(
		requestUtil.getUrlPrefix('user'),
		validate(userValidation.createUser),
		userController.createUser
	);

};


// update user
// get user