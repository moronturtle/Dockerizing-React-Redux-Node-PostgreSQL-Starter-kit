const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const Pool = require("pg").Pool;
const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "db",
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.json({ info: "It works!" });
});
app.get("/test_query", (request, response) => {
  let q = "SELECT * FROM data ORDER BY id ASC";
  pool.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});
app.listen(port, () => {
  console.log(`running in port ${port}.`);
});
