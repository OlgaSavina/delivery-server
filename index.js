import express from 'express';
import mongoose from 'mongoose';
import {shopCreateValidation, productCreateValidation, orderCreateValidation} from './validations.js';
import * as ProductController from './controllers/ProductController.js';
import * as ShopController from './controllers/ShopController.js';
import * as OrderController from './controllers/OrderController.js';
import cors from 'cors';

mongoose.connect(
    'mongodb+srv://savina:savina@cluster0.zgayyak.mongodb.net/delivery?retryWrites=true&w=majority',
    ).then(()=>
        console.log('DB ok'))
        .catch((err)=> console.log('db error',err));

const app = express();

app.use(cors());

app.use(express.json());

app.get('/shops', ShopController.getAll);


app.get('/products', ProductController.getAll);
app.post('/orders',  OrderController.create);
app.get('/orders', OrderController.getAll);


app.listen(4444, (err) =>{
    if(err){
        return console.log(err);
    }
    console.log('Server ok');
});