// implement your API here

// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require('express');
const db = require('./data/db.js');

// creates an express application using the express module
const server = express();
// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Hello World');
});

//creates a new endpoint that returns however many hobbitses exist on the server.
server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee',
        },
        {
            id: 2,
            name: "Frodo Baggins",
        },
    ];
    res.status(200).json(hobbits);
})

//creates a new enpoint that returns a list of users stored on the server.
server.get('/users', (req,res) => {
    db.find(req.body)
        .then(users => {
            res.status(200).json(users)
            })
        .catch(res.status(500).json('oh, noez! theres a problem with the response'));
})

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000'));