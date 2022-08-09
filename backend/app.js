const express = require("express");
const cors = require("cors");
const router = require("./Router/router");


const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = 5001;

app.use("/api", router);

app.listen(PORT, (error) => {
    if(!error) {
    console.log("Server is Running on Port " + PORT)
    }
    else {
    console.log(error)
    }
})
