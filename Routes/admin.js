const express = require('express');
const router = express.Router();
const Admin = require('../Models/admin'); 
const Staff = require('../Models/staff');
const Settings = require('../Models/settings');

router.get('/', async (req,res) => {
    try{
        const allAdmin = await Staff.find();
        res.json(allAdmin);
    }catch(err){
        res.json({
            message : err
        })
    }
});

router.post('/settings/rate' , async (req , res) => {
    const {rate} = req.body;
    const Rate = new Settings({
        rate : rate
    })
    try{
        const newRate = await Rate.save;
        res.json(newRate)
    }catch(err){
        res.json({
            message : err
        })
    }
})

router.post('/settings/slots' , async (req,res) => {
    const {level,row} = req.body;
    const slot = new Settings({
        level : level,
        row : row
    })
    try{
        const savedSlots = await Settings.save();
        res.json(savedSlots)
    }catch(err){
        res.json({
            message : err
        })
    }
})

router.post('/' , async (req,res) => {
    const {name,phone,email,password} = req.body;
    const admin = new Admin({
        name : name,
        email : email,
        phone : phone,
        password : password
    })
    try{
        const addAdmin = await admin.save();
        res.json(addAdmin);
    }catch(err){
        res.json({
            message : err
        })
    }
})

// router.put('/settings/rate' , (req,res) => {
//     const {rate} = req.body;
//     try{
//         await 
//     }catch(err){
//         res.status(400).json('Server Error')
//     }
// })

module.exports = router