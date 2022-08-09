const express = require('express');
const router = express.Router();
const pool = require("../db")
// const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

router.get('/test', async (req, res) => {
    try {
        res.json("test")
    } catch (error) {
        console.log(error.message)
    }
})

//signup new user
router.post("/signup", async (req, res) => {
    try {
        const email = req.body.email;
        const cust_name = req.body.cust_name;
        const number = req.body.number;
        const cust_password = req.body.cust_password;
        // const existingUser = await pool.query("SELECT email FROM customers WHERE email=($1) LIMIT 1", [email]);

        // if (existingUser !== Error) {
        //     res.json("This user already exists!")
        // } else {
        const newEmail = await pool.query("INSERT INTO customers (email, cust_name, number, cust_password) VALUES ($1, $2, $3, $4) RETURNING *",
        [email, cust_name, number, cust_password]);
        const allRows = await pool.query("SELECT * FROM customers")
        res.json(allRows.rows);
        
    } catch(error) {
        console.log(error.message)
    }
});

module.exports = router;