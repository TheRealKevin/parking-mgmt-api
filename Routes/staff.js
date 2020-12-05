const express = require('express');
const router = express.Router();
const Customer = require('../Models/customers');
const Staff = require('../Models/staff');

router.get('/', async (req,res) => {
    try{
        const customers = await Customer.find();
        res.json(customers);
    }catch(err){
        res.status(400).json({
            message : err
        })
    }
});

router.post('/', async (req,res) => {
    const {name,phone,email,password} = req.body;
    const staff = new Staff({
        name : name,
        email : email,
        phone : phone,
        password : password
    })
    
    try{
        const savedstaff = await staff.save();
        res.json(savedstaff);
    }catch(err){
        res.json({
            message : err
        })
    }
})

router.delete('/:staffID' , async (req,res) => {
    try{
        const removedcustomer = await Staff.deleteOne({ _id : req.params.staffID});
        res.json(removedcustomer);
    }catch(err){
        res.json({
            message : err
        })
    }
})

module.exports = router;