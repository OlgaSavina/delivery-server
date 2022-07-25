import OrderModel from '../models/Order.js';

export const getAll = async (req, res, next) =>{
    try{
        const orders = await OrderModel.find();
        res.json(orders);
    } 
    catch(err){
        console.log(err);
    res.status(500).json({
      message: 'Can not get all shops',
    });
}
}

export const create = async (req, res) => {
    try {
        const doc = new OrderModel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            adress:req.body.adress,
            products : req.body.addedProducts,

      
        });
    console.log(req.body);
    console.log(doc);
    const order = await doc.save();

    res.json(order);

    } catch(err){
        console.log(err);
    res.status(500).json({
      message: 'Can not create order',
    });
    }
}