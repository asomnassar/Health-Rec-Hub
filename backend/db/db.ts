import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreseSQL successfully");
});

module.exports = pool;
