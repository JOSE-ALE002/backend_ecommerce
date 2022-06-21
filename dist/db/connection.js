"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const connection = 'postgres';
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
exports.sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    port: 5432,
    logging: false,
    dialect: connection,
});
