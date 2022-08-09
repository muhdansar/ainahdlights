const Pool = require("pg").Pool;

const pool = new Pool({
    user: "admin",
    password: "ansar220995",
    database: "ainahdlightsdb",
    host: "localhost",
    port: 5432,
});

module.exports = pool;