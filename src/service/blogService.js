const { blogRepository } = require('../repository/repository.index');
/**
 * @description Create a new blog entry.
 * @param {object} blog 
 * @returns {Promise<{success: boolean, error?: string}>} 
 */
exports.createBlog = async (blog) => {
	try {
		return await blogRepository.createBlog(blog);
	} catch (error) {
		throw new Error(error.message);
	}
};

/**
 * @description Get blog by id.
 * @param {string} blogId 
 * @returns {Promise<{success: boolean, data?: object, error?: string}>} 
 */
exports.getBlog = async (blogId) => {
	try {
		return await blogRepository.getBlog(blogId);
	} catch (error) {
		throw new Error(error.message);
	}
};

/**
 * @description Search for blogs with a specific keyword.
 * @param {string} keyword  
 * @returns {Promise<{success: boolean, data?: Array, error?: string}>}  
 */
exports.searchBlogs = async (keyword) => {
	try {
		return await blogRepository.searchBlogs(keyword);
	} catch (error) {
		return { success: false, error: error.message };
	}
};

/**
 * @description Get paginated blogs.
 * @param {number} page  
 * @param {number} limit  
 * @returns {Promise<Array>} An array of blog posts for the specified page.
 */
exports.getBlogs = async (page, limit) => {
	try {
		return await blogRepository.getBlogs(page, limit);
	} catch (error) {
		throw new Error(error.message);
	}

};

/**
 * @description Update entry.
 * @param {object} blog  
 * @returns {Promise<{success: boolean, error?: string}>} 
 */
exports.updateBlog = async (blog) => {
	try {
		return await blogRepository.updateBlog(blog);
	} catch (error) {
		throw new Error(error.message);
	}
};

/**
 * @description Delete a blog by id.
 * @param {string} blogId - 
 * @returns {Promise<{success: boolean, error?: string}>} 
 */
exports.deleteBlog = async (blogId) => {
	try {
		return await blogRepository.deleteBlog(blogId);
	} catch (error) {
		throw new Error(error.message);
	}
};


/**
 * @description Physical delete a blog by id.
 * @param {string} blogId - 
 * @returns {Promise<{success: boolean, error?: string}>} 
 */
exports.physicalDeleteBlog = async (blogId) => {
	try {
		return await blogRepository.physicalDeleteBlog(blogId);
	} catch (error) {
		throw new Error(error.message);
	}
};

