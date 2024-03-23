// src/utils/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_zilex_v1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
