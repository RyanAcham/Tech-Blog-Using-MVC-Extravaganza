const { Post } = require('../models');

const postData = [
    {
        title: "Test Title",
        post_content: "Elit consequat minim voluptate commodo pariatur quis reprehenderit exercitation ipsum incididunt est nisi ipsum.",
        user_id: 3
    },
    {
        title: "Culpa pariatur voluptate in dolore sint incididunt elit quis nisi non.",
        post_content: "Excepteur duis ea consectetur dolore excepteur sunt fugiat elit ea esse.",
        user_id: 1
    },
    {
        title: "Incididunt Lorem Lorem tempor ad veniam sint non velit ut.",
        post_content: "Do anim sit velit excepteur laboris quis.",
        user_id: 2

    },
    {
        title: "Veniam fugiat veniam velit fugiat qui minim veniam amet.",
        post_content: "Excepteur aliqua non enim irure ex sit.",
        user_id: 5
    },
    {
        title: "Pariatur ea deserunt magna ut laborum.",
        post_content: "Sit tempor consequat aliqua id eu id excepteur.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;