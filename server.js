const express = require('express');
const axios = require("axios");
const path = require('path');

const app = express();

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint for sanity check
app.get('/apiEndpoint', async (req, res) => {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos';
    const response = await axios.get(apiEndpoint);
    const data = response.data;
    res.send(data);
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
