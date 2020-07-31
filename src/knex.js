const path = require("path");

const knex = require("knex");

const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'boot'
    }
});

module.exports = connection;