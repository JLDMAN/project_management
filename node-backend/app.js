// use express framework to start node js server
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); 
const userRoutes = require('./routes/userRoutes'); 
const cors = require('cors'); 

// where server can be reached
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// only except incoming requests from this origin
app.use(cors(corsOptions));
// convert incoming data to jsonobject with bodyparser
app.use(bodyParser.json());

// Routes incoming requests
app.use('/api/users', userRoutes);
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});