import pg from 'pg';
import dotenv from 'dotenv';


dotenv.config();
const { Pool } = pg;

const URI = process.env.SUPABASE_KEY 
// const URI = process.env.DB_URI_STRING

const pool = new Pool({
    connectionString: URI,
});
const checkDatabaseConnection = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('Connected to the PostgreSQL database.');
    } catch (err) {
        console.error('Failed to connect to the PostgreSQL database:', err);
    }
  };
  console.log(`banan`)

export {pool,checkDatabaseConnection}   