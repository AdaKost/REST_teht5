require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 3307, // HUOM! Minulla oli joku vanha asennus jo portissa 3306 joten vaihdoin portin
});

module.exports = pool.promise();
