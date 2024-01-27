const { Blog } = require('../model/blog');
const { stateEnums } = require('../model/enums/enums.index');

/**
 * @description Create a new blog.
 * @param {object} blog 
 * @returns {Promise<Blog>}
 * @throws {Error} Throws an error if saving the blog fails.
 */
exports.createBlog = async (blog) => {
	try {
		const blogModel = new Blog(blog);
		return await blogModel.save();
	} catch (error) {
		throw new Error(`Error creating blog: ${error.message}`);
	}
};

/**
 * @description Get a blog by id.
 * @param {string} id 
 * @returns {Promise<Blog>} 
 * @throws {Error} Throws an error the blog fails.
 */
exports.getBlog = async (id) => {
	try {
		return await Blog.findOne({
			_id: id,
			state: { $ne: stateEnums.BlogState.Deleted }
		});

	} catch (error) {
		throw new Error(`Error blog: ${error.message}`);
	}
};

/**
 * @description Search blogs by keywords.
 * @param {string} keyword  
 * @returns {Promise<Array>}  
 */
exports.searchBlogs = async (keyword) => {
	try {
		return await Blog.find({
			$text: { $search: keyword },
			state: { $ne: stateEnums.BlogState.Deleted }
		});

	} catch (error) {
		throw new Error(`Error searching blogs: ${error.message}`);
	}
};

/**
 * @description Get paginated blogs.
 * @param {number} page 
 * @param {number} limit 
 * @returns {Promise<Array>} An array of blog posts for the this page.
 */
exports.getBlogs = async (page, limit) => {

	try {
		const skip = (page - 1) * limit;
		return await Blog.find({
			state: { $ne: stateEnums.BlogState.Deleted }
		}).skip(skip).limit(limit);
	} catch (error) {
		throw new Error(`Error blog: ${error.message}`);
	}

};

/**
 * @description Update a blog.
 * @param {object} blog  
 * @returns {Promise<object>}  
 * @throws {Error} Throws an error if updating the blog fails.
 */
exports.updateBlog = async (blog) => {
	try {
		return await Blog.updateOne({ _id: blog.id }, blog);

	} catch (error) {
		throw new Error(`Error updating blog: ${error.message}`);
	}
};

/**
 * @description Delete a blog by id.
 * @param {string} id  
 * @returns {Promise<object>}  
 * @throws {Error} Throws an error if deleting the blog fails.
 */
exports.deleteBlog = async (id) => {
	try {
		return await Blog.findByIdAndUpdate(id, {
			"state": stateEnums.BlogState.Deleted
		}, { new: true });

	} catch (error) {
		throw new Error(`Error deleting blog: ${error.message}`);
	}
};


/**
 * Fiziksel olarak silmek yerine bloğun durumu silindi durumuna çekilebilir.
 * Fiziksel olarak Silinmek istenirse aşağıdaki servis kullanılabilir.
 */


exports.physicalDeleteBlog = async (id) => {
	try {
		return await Blog.findByIdAndDelete(id);

	} catch (error) {
		throw error;
	}
};