const express = require('express');
const router = express.Router();
const Admin = require('../Models/admin');

router.post('/' , async (req,res) => {
    const {email , password} = req.body;
    console.log(email,password)
    try{
        await Admin.findOne({email : email})
        .then(profile => {
            if(!profile) {
                res.json('Admin does not exist')
            } else {
                if(profile.password === password) {
                    res.json('Admin authenticated');
                } else {
                    res.json('Admin unauthorized Access')
                }
            }
        })
    }catch(err){
        res.json({
            message : err
        })
    }
})

module.exports = router;