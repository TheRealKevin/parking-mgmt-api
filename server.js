const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');

// UTILS

app.use(cors());
 
app.use(bodyParser.json());

// ROUTES

const customersRoute = require('./routes/customers');

const StaffRoute = require('./routes/staff');

const AdminRoute = require('./routes/admin');

const PayRoute = require('./routes/pay');

const AdminSignInRoute = require('./routes/adminsignin');

const StaffSignInRoute = require('./routes/staffsignin');

// MIDDLEWARE

app.use('/customers',customersRoute);

app.use('/staff',StaffRoute);

app.use('/admin',AdminRoute);

app.use('/pay',PayRoute);

app.use('/adminsignin',AdminSignInRoute);

app.use('/staffsignin',StaffSignInRoute);

//  MODELS

const Customer = require('./Models/customers');

const Admin = require('./Models/admin');


const database = {
    staff : 
    [
        {
            name : 'Alex Turner',
            phone : '5465321328',
            password : 'cookies',
            email : 'alex@gmail.com',
            // joined : new Date()
            // statecode : 'DL',
            // districtcode : '89',
            // alphanum1 : 'SF',
            // alphanum2 : '0505'
        },
        {
            name : 'Chris Martin',
            phone : '4546891683',
            password : 'pizza',
            email : 'chris@gmail.com',
            // joined : new Date()
            // statecode : 'DL',
            // districtcode : '22',
            // alphanum1 : 'GQ',
            // alphanum2 : '5584'
        },
        {
            name : 'Abel tesfaye',
            phone : '4888488848',
            password : 'mocha',
            email : 'weeknd@gmail.com',
            // joined : new Date()
            // statecode : 'DL',
            // districtcode : '69',
            // alphanum1 : 'CN',
            // alphanum2 : '9795'
        },
        {
            name : 'Brad Lamar',
            phone : '7651398712',
            password : 'granola',
            email : 'radbrad@gmail.com',
            // joined : new Date()
            // statecode : 'DL',
            // districtcode : '12',
            // alphanum1 : 'US',
            // alphanum2 : '1585'
        },
        {
            name : 'Peter Parker',
            phone : '8756123659',
            password : 'pancakes',
            email : 'spidey@gmail.com',
            // joined : new Date()
            // statecode : 'DL',
            // districtcode : '27',
            // alphanum1 : 'NY',
            // alphanum2 : '9723'
        }
    ] 
}

mongoose.connect('mongodb://localhost:27017/parkingmgmt', {useNewUrlParser: true, useUnifiedTopology: true} , () => {
    console.log('Connected to Database')
});

const connection = mongoose.connection;

app.get('/',(req,res) => {
    res.send(database.staff);
})

app.post('/' , async (req,res) => {
    const {name, email , phone, statecode, districtcode, alphanum1, alphanum2} = req.body;
    const newCustomer = new Customer({
        name : name,
        email : email,
        phone : phone,
        statecode : statecode,
        districtcode : districtcode,
        alphanum1 : alphanum1,
        alphanum2 : alphanum2
    })

    try{
        const saveNewCustomer = await newCustomer.save();
        res.json(saveNewCustomer);        
    }catch(err){
        res.json({
            message : err
        })
    }
})

app.post('/add' , async (req , res) => {
    const {name,email,password,phone} = req.body;
    const admin = new Admin({
        name : name,
        email : email,
        password : password,
        phone : phone
    })
    try{
        const addAdmin = await admin.save()
        res.json(addAdmin);
    }catch(err){
        res.json({
            message : err
        })
    }
})

// app.delete('/staffhome',(req,res) => {
//     const index = database.staff.indexOf(req.email);
//     if(index > -1){
//         database.staff.splice(index,1);
//         res.json('Customer found');
//     }else{
//         res.status(400).json('No customer found');
//     }
// })

app.listen(3000 , () => {
    console.log('App is listening to 3000');
})