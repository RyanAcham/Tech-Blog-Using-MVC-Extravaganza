const { User } = require('../models');

const userData = [
    {
        username: "ryanacham",
        twitter: "ryanacham",
        github: "ryanacham",
        email: "ryanacham@hotmail.com",
        password: "y^sto%"
    },
    {
        username: "john_brown",
        twitter: "johnb",
        github: "johnb",
        email: "john_brown@outlook.com",
        password: "ghra856jngngngdna"
    },
    {
        username: "charlie_finger",
        twitter: "charf",
        github: "charf",
        email: "charlie_finger@gmail.com",
        password: "n*gjl#456"
    },
    {
        username: "parli_linger",
        twitter: "parLing",
        github: "parLing",
        email: "parli_linger@hotmail.com",
        password: "hljky%#ot^7"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;