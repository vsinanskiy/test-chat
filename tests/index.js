const axios = require('axios');

async function get(path, params = {}) {
    jest.mock("axios");

    const response = await axios.get(`http://localhost:3000/${path}`, params)
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    return response.data;
}

module.exports = get;
