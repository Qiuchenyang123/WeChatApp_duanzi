'use strict';
const axios = require('axios');
const httpUrl = 'https://api.apiopen.top/getJoke';
const option1 = {
    page: 1,
    count: 10,
    type: 'text'
};
const option2 = {
    page: 1,
    count: 10,
    type: 'image'
};
const option3 = {
    page: 1,
    count: 10,
    type: 'video'
};

exports.main = async(event, context) => {
    const result = await axios.get(httpUrl, { params: event });
    return result.data
}