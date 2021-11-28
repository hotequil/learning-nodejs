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

const create = async (developer) => {
    const connection = await connect();
    const query = `INSERT INTO ${table} (name, age) VALUES (?, ?)`;
    const values = [developer.name, developer.age];

    await connection.query(query, values);
}

module.exports = { get, create };
