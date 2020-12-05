const express = require('express');
const router = express.Router();
const Customer = require('../Models/customers');

router.post('/' , async (req,res) => {      // Using POST req instead of GET because we want to use the req.body to send he email of the customer
    const {email} = req.body;
    try{
        const theCustomer = await Customer.findOne({email : email})
        .then(profile => {
            if(!profile){
                res.status(400).json('Customer not found')
            } else {
                res.json(profile)
            }
        })
        .catch(err =>{
            console.log('Error is ',err.message)
        })
    }catch(err){
        res.json({
            message : err
        })
    }
})

module.exports = router;