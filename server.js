// TODO: set up connection to server, isolate to individual connection.js page
// const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
// const ctable = 
require('console.table');
const routes = require('./routes/api');

// import sequelize connection, separated to connection.js for clarity
const sequelize = require('./config/connection');


// establish an instance of express and assign to connection in config.js, 3001 used as a backup
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware established
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });