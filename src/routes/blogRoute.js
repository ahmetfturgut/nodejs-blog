const { blogController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { authorizer, validate } = require('../middlewares/middlewares.index');
const { blogValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {

	/**
	 * Create Blog
	 */
	app.post(
		requestUtil.getUrlPrefix('blog'),
		authorizer.checkAuth,
		validate(blogValidation.createBlog),
		blogController.createBlog
	);

	/**
	 * Get Blog
	 */
	app.get(
		requestUtil.getUrlPrefix('blog/:id'),
		authorizer.checkAuth,
		blogController.getBlog
	);

	/**
		* Search Blogs
		* @param {string} keyword - The keyword to search for.
		*/
	app.get(
		requestUtil.getUrlPrefix('blogs/search'),
		authorizer.checkAuth,
		blogController.searchBlogs
	);

	/**
	* Get Blogs
	  * @param {number} page  
	  * @param {number} limit  
	  */
	app.get(
		requestUtil.getUrlPrefix('blogs'),
		authorizer.checkAuth,
		blogController.getBlogs
	);

	/**
	 * Update Blog
	 */
	app.put(
		requestUtil.getUrlPrefix('blog/:id'),
		authorizer.checkAuth,
		validate(blogValidation.updateBlog),
		blogController.updateBlog
	);

	/**
	 * Delete Blog
	 */
	app.put(
		requestUtil.getUrlPrefix('blog/deleteBlog/:id'),
		authorizer.checkAuth,
		blogController.deleteBlog
	);

	/**
	 * Physical Delete Blog!!!!
	 */
	app.delete(
		requestUtil.getUrlPrefix('blog/:id'),
		authorizer.checkAuth,
		blogController.physicalDeleteBlog
	);
 

};
