const { Comment } = require('../model/comment');

/**
 * @description Create a comment
 * @param {object} comment - Comment data
 * @returns {Promise<Comment>} A promise that resolves with the saved comment object
 */
exports.createComment = async (comment) => {
    try {
        const commentModel = new Comment(comment);
        return await commentModel.save();
    } catch (error) {
        throw error;
    }
};