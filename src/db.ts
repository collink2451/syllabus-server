import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const connect = async () => {
  try {
    const conn = await pool.getConnection();
    console.log('Connected to MySQL database');
    conn.release();
  } catch (err) {
    console.log('MySQL connection error:', err);
  }
};

export { pool };
export default { connect };
