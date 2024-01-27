const { commentController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { authorizer, validate } = require('../middlewares/middlewares.index');
const { commentValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {

	/**
	 * Create Comment
	 */
	app.post(
		requestUtil.getUrlPrefix('comment'),
		authorizer.checkAuth,
		validate(commentValidation.createComment),
		commentController.createComment
	);



};
