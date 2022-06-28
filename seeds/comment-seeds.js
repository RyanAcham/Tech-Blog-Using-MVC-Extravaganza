const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 5,
        comment_text: "good job"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "nice job bro"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "nice work"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "thanks everyone"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "epic"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "awesome job"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "good work"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "kewl"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;