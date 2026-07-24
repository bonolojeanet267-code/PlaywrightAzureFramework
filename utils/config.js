require('dotenv').config();

module.exports = {

    baseUrl: process.env.BASE_URL,

    users: {

        standard: {
            username: process.env.STANDARD_USERNAME,
            password: process.env.STANDARD_PASSWORD
        },

        locked: {
            username: process.env.LOCKED_USERNAME,
            password: process.env.LOCKED_PASSWORD
        }

    }

};