const express = require('express');
const router = express.Router(); 
const accessAdmin= require('../middlewares/accessAdmin')
const{index, contact, about, music, admin, login,noEntry}= require('../controllers/indexController'); 

router
    .get('/', index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/music', music)
    .get('/admin',accessAdmin, admin)
    .get('/login', login)
    .get('/no-entry', noEntry)




module.exports= router; 