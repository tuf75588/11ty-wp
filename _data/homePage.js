const fetch = require("node-fetch");
const API_URL = 'https://wp11ty.wpengine.com/wp-json/wp/v2/pages';

const getHomePage = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        // log error
        console.log(error.message);
    }
}



