const express = require('express');
const router = express.Router();
const Customer = require('../Models/customers')

router.get('/', async (req,res) => {
    try{
        const customers = await Customer.find();
        res.json(customers);
    }catch(err){
        res.json({
            message : err
        })
    }
});

router.get('/:customerID' , async (req,res) => {
    try{
        const customer = await Customer.findById(req.params.customerID);
        res.json(customer)
    }catch(err){
        res.json({
            message : err
        })
    }
})

router.post('/', async (req,res) => {
    const {name,email,phone,statecode,districtcode,alphanum1,alphanum2} = req.body;
    const customer = new Customer({
        name : name,
        email : email,
        phone : phone,
        statecode : statecode,
        districtcode : districtcode,
        alphanum1 : alphanum1,
        alphanum2 : alphanum2
    })

    try{
        const savedcustomer = await customer.save();
        res.json(savedcustomer)
    }catch(err){
        res.json({
            message : err
        })
    }
})

router.delete('/:customerID', async (req,res) => {
    console.log(req.params.customerID)
    try{
        const customer = await Customer.deleteOne({_id : req.params.customerID})
        res.json(customer);
    }catch(err){
        res.json({
            message : err
        })
    }
})

module.exports = router;
