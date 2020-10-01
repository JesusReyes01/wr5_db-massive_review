// get access to our environment variables
require('dotenv').config();

// require the specific packages necessary
const express = require('express');
const app = express();
const massive = require('massive');
const userCtrl = require('./controllers/userController');

// bring in any outside info (outside of our server index.js)
const { CONNECTION_STRING, SERVER_PORT } = process.env;

// get access to the body object for any reqs that come in with a body
app.use(express.json())

// connect to our db
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('db connected');
    app.set('db', db);
}).catch(err => console.log(err))

// set up any necessary endpoints
app.get('/api/users', userCtrl.getAllUsers);
app.post('/api/users', userCtrl.addUser);

// listen for any requests
app.listen(SERVER_PORT, () => console.log(`Listening to ${SERVER_PORT} FM`))