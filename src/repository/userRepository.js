const { User } = require('../model/user');

/**
 * @description Creates a new user 
 * @param {object} user 
 * @returns {Promise<User>} 
 * @throws {Error} Throws an error if saving the user fails.
 */
exports.createUser = async (user) => {
	try {
		const userModel = new User(user);
		return await userModel.save();
	} catch (error) {
		throw error;
	}
};

/**
 * @description Get user by id.
 * @param {string} id  
 * @returns {Promise<User|null>}  
 * @throws {Error} Throws an error if the query fails.
 */
exports.getUser = async (id) => {
	try {
		return await User.findOne({ _id: id });
	} catch (error) {
		throw error;
	}
};

/**
 * @description Get user by email
 * @param {string} email 
 * @returns {Promise<User|null>}  
 * @throws {Error} Throws an error if the query fails.
 */
exports.getUserByEmail = async (email) => {
	try {
		return await User.findOne({ email });
	} catch (error) {
		throw error;
	}
};