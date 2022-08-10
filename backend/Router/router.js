const express = require('express');
const router = express.Router();
const pool = require("../db")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
ACCESS_SECRET = "qm8HnWRhJbnJVmQJbg1D62XLhFIEy8wGJ1R6ch6f1rzJhUrE2fu0cuSLDr5jV119NP6AB23msqRLDIF8xldtWEU5H8YsytqPBXMV";

//test route
router.get('/test', async (req, res) => {
    try {
        res.json("test")
    } catch (error) {
        console.log(error.message)
    }
})

//login - done
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const findEmail = await pool.query("SELECT * FROM customers WHERE email=($1)", [email])
        if (findEmail === null) {
            res.json("user does not exist");
            console.log("user does not exist");
        }

        const findPW = await pool.query("SELECT cust_password FROM customers WHERE email=($1)", [email])
        const keyedPW = await bcrypt.compare(req.body.cust_password, findPW.rows[0].cust_password);

        if (!keyedPW) {
            console.log("email or pass incorrect");
            res.json("email or pass incorrect")
        }
        // const findPW = await pool.query("SELECT cust_password FROM customers WHERE ")

        const payload = {
            email: email
        };

        const access = jwt.sign(payload, ACCESS_SECRET, {
            expiresIn: "5m"
        });

        const response = { access }

        const findName = await pool.query("SELECT cust_name FROM customers WHERE email=($1)", [email]);
        res.json(findName.rows[0].cust_name);

    } catch (error) {
        console.log(error.message)
    }
})

//signup new user - done
router.post("/signup", async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.cust_password, 12)

        const email = req.body.email;
        const cust_name = req.body.cust_name;
        const number = req.body.number;
        const cust_password = hash;
        
        const showEmails = await pool.query("SELECT email FROM customers")
        const allEmails = showEmails.rows;

        const findThis = await pool.query("SELECT email FROM customers WHERE email=($1)", [email]);
        if ((findThis.rows.length !== 0)) {
            res.json("user exists");
            console.log("User exists!");
        } else {
            const newEmail = await pool.query("INSERT INTO customers (email, cust_name, number, cust_password) VALUES ($1, $2, $3, $4) RETURNING *",
            [email, cust_name, number, cust_password]);
            const allRows = await pool.query("SELECT * FROM customers");
            res.json(allRows.rows);
        };

    } catch(error) {
        console.log(error.message)
    }
});

//get acc email
router.get("/account/:id", async (req, res) => {
    try {
        const name = req.params.id;
        const getUser = await pool.query("SELECT cust_name FROM customers WHERE cust_name=($1)", [name])
        res.json(getUser.rows[0].cust_name);
    } catch (error) {
        console.log(error.message)
    }
})

//validation testing
router.get("/show", async (req, res) => {
    try {
        const email = req.body.email;
        const showEmails = await pool.query("SELECT email FROM customers")
        const allEmails = showEmails.rows;
        for (let i=0; i < allEmails.length; i++) {
            if (allEmails[i].email === email) {
                res.json("User exists")
            } else {
                res.json("User created")
            }
        }
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;