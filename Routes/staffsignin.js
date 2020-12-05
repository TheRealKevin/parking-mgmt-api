const express = require('express');
const router = express.Router();
const Staff = require('../Models/staff');

router.post('/' , async (req,res) => {
    const {email , password} = req.body;
    try{
        await Staff.findOne({email : email})
        .then(profile => {
            if(!profile) {
                res.json('Staff Memeber does not exist')
            } else {
                if(profile.password === password) {
                    res.json({text : 'Staff Member authenticated',name : profile.name});
                } else {
                    res.json('User unauthorized Access')
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