import mongoose from "mongoose";
import Product from "./models/Product.js";
import Shop from "./models/Shop.js";


mongoose
  .connect(
    "mongodb+srv://savina:savina@cluster0.zgayyak.mongodb.net/delivery?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("db error", err));

const shops = [
  {
    name: "MCdonald",
  },
  {
    name: "Pizzaria",
  },
  {
    name: "Cafe",
  },
];
const products = [
  {
    name: "Burger",
    price: 15,
    imageUrl:
      "https://s1.1zoom.ru/big0/889/Fast_food_Hamburger_Buns_Meat_products_White_549661_1365x1024.jpg",
    shop: shops[1],
  },
  {
    name: "Fried-potatoes",
    price: 100,
    imageUrl:
      "https://static5.depositphotos.com/1008105/521/i/450/depositphotos_5210334-stock-photo-french-fries-isolated-on-white.jpg",
    shop: shops[2],
  },
  {
    name: "Pizza",
    price: 150,
    imageUrl:
      "https://kartinkin.net/uploads/posts/2021-04/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51.png",
    shop: shops[2],
  },
  {
    name: "Coca-cola",
    price: 30,
    imageUrl:
      "https://thumbs.dreamstime.com/b/%D0%B1%D1%83%D1%82%D1%8B%D0%BB%D0%BA%D0%B8-%D0%B8-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-coca-cola-%D0%BA%D0%B8%D1%88%D0%B8%D0%BD%D0%B5%D0%B2-%D0%BC%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0-%D0%BE%D0%B5-%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8F-%D1%81-%D0%BF%D1%83%D1%82%D0%B5%D0%BC-188898630.jpg",
    shop: shops[2],
  },
  {
    name: "Pasta",
    price: 200,
    imageUrl:
      "https://attuale.ru/wp-content/uploads/2018/03/fetuchini-s-bekonom-1-800x533.jpg",
    shop: shops[2],
  },
];


const seedDB = async () => {
  await Shop.deleteMany({});
  await Shop.insertMany(shops);
  await Product.deleteMany({});
  await Product.insertMany(products);
};

seedDB().then(() => {
  mongoose.connection.close();
});
