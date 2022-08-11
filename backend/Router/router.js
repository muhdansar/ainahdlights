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

//get acc email/name
router.get("/account/:id", async (req, res) => {
    try {
        const name = req.params.id;
        const getUser = await pool.query("SELECT cust_name FROM customers WHERE cust_name=($1)", [name])
        res.json(getUser.rows[0].cust_name);
    } catch (error) {
        console.log(error.message)
    }
})

//insert order
router.post("/addtocart/tartnenas", async (req, res) => {
    try {
        // const email = req.body.email;//placeholder
        // const item = req.body.item;
        // const price = req.body.price;
        // const qty = req.body.qty;

        // const pushToCart = await pool.query("INSERT INTO orderpercustomer (email, item, price, qty) VALUES ($1, $2, $3, $4) RETURNING *", [email, item, price, qty]);
        // const sumSimilar = await pool.query("SELECT item, SUM(qty) FROM orderpercustomer GROUP BY item");

        // res.json(sumSimilar.rows);
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='tart nenas'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='tart nenas'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

//add makmur to cart
router.post("/addtocart/kuihmakmur", async (req, res) => {
    try {
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='kuih makmur'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='kuih makmur'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

//add suji to cart
router.post("/addtocart/sujibadam", async (req, res) => {
    try {
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='suji badam'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='suji badam'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

//add oreo cheesecake to cart
router.post("/addtocart/oreocheese", async (req, res) => {
    try {
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='oreo cheesecake'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='oreo cheesecake'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

//add tiramisu to cart
router.post("/addtocart/tiramisu", async (req, res) => {
    try {
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='tiramisu'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='tiramisu'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

//add mint cheesecake to cart
router.post("/addtocart/mintcheese", async (req, res) => {
    try {
        const qty = req.body.qty;
        const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='mint cheesecake'");
        const currentQty = quantity.rows[0].qty;
        const doThis = await pool.query("UPDATE orderpercustomer SET qty=($1) WHERE item='mint cheesecake'", [(Number(qty)+Number(currentQty))]);
        res.json(quantity);
    } catch (error) {
        console.log(error.message)
    }
});

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

//test new show fn
router.get("/testing", async (req, res) => {
    try {
        const test = await pool.query("SELECT qty FROM orderpercustomer WHERE item='tart nenas'");
        res.json(test.rows[0].qty)
    } catch (error) {
        console.log(error.message)
    }
})

//test fn for cart page
router.get("/cart", async (req, res) => {
    try {
        const test = await pool.query("SELECT * FROM orderpercustomer WHERE qty!=0");
        res.json(test.rows);
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;