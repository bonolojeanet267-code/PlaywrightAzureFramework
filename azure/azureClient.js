const axios = require('axios');
const config = require('./azureConfig');

const token = Buffer.from(`:${config.personalAccessToken}`).toString('base64');

const azureClient = axios.create({

    baseURL: `https://dev.azure.com/${config.organization}/${config.project}/_apis`,

    headers: {

        Authorization: `Basic ${token}`,

        'Content-Type': 'application/json'

    }

});

module.exports = azureClient;