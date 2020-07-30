const axios = require('axios');
const express = require('express')
const app = express()
const port = 3020

//Hit the Request URL
async function getResponse() {
    try {
        const response = await axios.get('https://api.covid19india.org/state_district_wise.json');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
//Push the response into server
getResponse().then((data => {
    app.get('/', (req, res) => res.send(data))
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}));