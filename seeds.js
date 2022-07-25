import mongoose from 'mongoose';
import Product from './models/Product.js';
import Shop from './models/Shop.js';

mongoose.connect(
    'mongodb+srv://savina:savina@cluster0.zgayyak.mongodb.net/delivery?retryWrites=true&w=majority',
    ).then(()=>
        console.log('DB ok'))
        .catch((err)=> console.log('db error',err));


const shops =[
    {
        name: 'MCdonald',
      
    },
    {
    
        name: 'Pizzaria',
    },
    {
        name: 'Cafe',
    }
];
const products = [
    {
        name: 'Burger',
        price: 15,
        imageUrl:"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
        shop: shops[1]

    },
    {
        name: 'Fried-potatoes',
        price: 100,
        imageUrl:"https://kartinkin.net/uploads/posts/2021-07/thumbs/1625177357_2-kartinkin-com-p-zharenaya-kartoshka-yeda-krasivo-foto-2.jpg",
        shop: shops[2]

    },
    {
        name: 'Pizza',
        price: 150,
        imageUrl:"https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
        shop: shops[2]

    },
    {
        name: 'Coca-cola',
        price: 30,
        imageUrl:"https://kartinkin.net/uploads/posts/2022-02/1645474171_1-kartinkin-net-p-kartinki-koka-kola-1.jpg",
        shop: shops[2]

    },
    {
        name: 'Pasta',
        price: 200,
        imageUrl:"https://kartinkin.net/uploads/posts/2021-08/1629830764_6-kartinkin-com-p-krasivaya-podacha-pasti-yeda-krasivo-foto-7.jpg",
        shop: shops[2]

    },

];
console.log(products[0].shop);

const seedDB = async () => {
    await Shop.deleteMany({});
    await Shop.insertMany(shops);
    await Product.deleteMany({});
    await Product.insertMany(products);
    
};

seedDB().then(()=>{
    mongoose.connection.close();
});