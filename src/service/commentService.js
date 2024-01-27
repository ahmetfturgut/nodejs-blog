const { commentRepository } = require('../repository/repository.index');

/**
 * @description Creates a comment
 * @param {object} comment - Comment data
 * @returns {Promise<object>} A promise that resolves with the created comment
 */
exports.createComment = async (comment) => {
    try {
        await commentRepository.createComment(comment);
        return { success: true };
    } catch (error) {
        throw new Error(error.message);
    }
};