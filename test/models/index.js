'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/sequelize.json')[env];
const db = {};

let sequelize;

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;
