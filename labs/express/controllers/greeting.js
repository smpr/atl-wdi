const express=require('express')
const router= express.Router();

router.get('/', (req, res) =>{
    res.send(`hello, ${req.query.name}  you smell of elderberries`)
    
})

module.exports = router;