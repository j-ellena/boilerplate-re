const express = require('express');
const path = require('path');

const app = express();

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint for sanity check
app.get('/api/getList', (req, res) => {
    const list = ["Backend", "sanity", "check"];
    res.json(list);
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
