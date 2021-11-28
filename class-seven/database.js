const mysql = require('mysql2/promise');
const table = 'developers';

const connect = async () => {
    const connection = global.connection;

    if(connection && connection.state !== 'disconnected') return connection;

    const newConnection = await mysql.createConnection('mysql://root:12345678@localhost:3306/people');

    global.connection = newConnection;

    return newConnection;
};

const get = async () => {
    const connection = await connect();
    const [ rows ] = await connection.query(`SELECT * FROM ${table}`);

    return rows;
};

module.exports = { get };
