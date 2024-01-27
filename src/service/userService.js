const { userRepository } = require('../repository/repository.index');
const { cryptUtil } = require('../utils/utils.index');
const { stateEnums } = require('../model/enums/enums.index');

/**
 * @description Creates a new user.
 * @param {object} user
 * @returns {Promise<{success: boolean, error?: string}>} 
 */
exports.createUser = async (user) => {
	try {
		const existingUser = await userRepository.getUserByEmail(user.email);
		if (existingUser) {
			throw new Error('This email is already in use.');
		}

		return await userRepository.createUser(user);
	} catch (error) {
		throw new Error(error.message);
	}
};
/**
 * @description Get a user by id.
 * @param {string} id 
 * @returns {Promise<{success: boolean, data?: object, error?: string}>} 
 */
exports.getUser = async (id) => {
	try {
		return await userRepository.getUser(id);

	} catch (error) {
		throw new Error(error.message);
	}
};

/**
 * @description Authenticates a user by email and password.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{success: boolean, data?: {name: string, email: string, token: string}, error?: string}>} 
 */
exports.authenticateUser = async (email, password) => {
	try {
		const user = await userRepository.getUserByEmail(email);
		if (!user || user.state !== stateEnums.UserState.Active) {
			throw new Error('Invalid credentials or user not active.');
		}

		const passwordDto = {
			hashPassword: user.password,
			salt: user.salt,
			password
		};

		const isMatch = cryptUtil.verifyHash(passwordDto);
		if (!isMatch) {
			throw new Error('Invalid credentials.');
		}

		const token = cryptUtil.createToken({
			userId: user.id,
			name: user.name,
			email: user.email,
			isLoggedIn: true
		});

		return {
			name: user.name,
			email: user.email,
			token
		}

	} catch (error) {
		throw new Error(error.message);
	}
};


