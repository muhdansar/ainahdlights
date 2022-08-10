CREATE TABLE customers(
    customers_id SERIAL PRIMARY KEY,
    email VARCHAR(255)
)
CREATE TABLE orderpercustomer(
    add_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    item VARCHAR(255),
    price NUMERIC(20),
    qty NUMERIC(20)
)
const qty = req.body.qty;
const quantity = await pool.query("SELECT qty FROM orderpercustomer WHERE item='tart nenas'");
const currentQty = quantity.rows[0].qty;
"UPDATE orderpercustomer SET qty=($1)+($2) WHERE item='tart nenas'", [currentQty, qty];