// TODO: set up connection to server, isolate to individual connection.js page
const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctable = require('console.table');
const express = require('express');

const routes = require('./routes');