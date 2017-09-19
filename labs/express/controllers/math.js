const express = require('express');
const router = express.Router();


router.get('/:operator', (req, res) => {
    let num1 = parseInt(`${req.query.num2}`);
    let num2 = parseInt(`${req.query.num1}`);
    if (req.params.operator === "add"){
        res.send(`${num1 + num2}`);
    } else if (req.params.operator === "subtract"){
        res.send(`${num1 - num2}`);
    } else if (req.params.operator === "multiply"){
        res.send(`${num1 * num2}`);
    } else if (req.params.operator === "divide"){
        res.send(`${num1 / num2}`);
    }
});




module.exports = router;