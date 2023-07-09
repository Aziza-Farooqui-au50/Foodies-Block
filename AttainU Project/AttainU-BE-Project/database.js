const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()





// Database connection
function initDB(){
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
                },
    items: { type: Object, required: true },
    phone: { type: String, required: true},
    address: { type: String, required: true},
    paymentType: { type: String, default: 'COD'},
    status: { type: String, default: 'order_placed'},
}, { timestamps: true })

}


mongoose.connect('mongodb+srv://azizafarooqui2:az_fa7777@foodiescluster.brshas3.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useCreateIndex:true, 
    useUnifiedTopology: true, 
    useFindAndModify : true }).catch((err)=>{
        console.log('Connection failed...')
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
})
    






module.exports = {initDB};
