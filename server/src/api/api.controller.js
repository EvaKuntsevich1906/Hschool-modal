const express = require("express");
const router = express.Router();
const {
    createUser
} = require("./api.service");


router.get("/register", async (req, res) => {
    try {
console.log("okay");
        res.status(200).send("okay");
    } catch (err) {
        res.status(500).send(err.message)
    }
});


router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        console.log({name, email, password});
            // const createdUser = await createUser(name, email, password)
        res.status(200).send({"hi":"hanna"});
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router;