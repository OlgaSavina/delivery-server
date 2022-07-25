import ShopModel from '../models/Shop.js';

export const getAll = async (req, res, next) =>{
    try{
        const shops = await ShopModel.find();
        res.json(shops);
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
        const doc = new ShopModel({
            name:req.body.name,
      
        });
    const shop = await doc.save();

    res.json(shop);

    } catch(err){
        console.log(err);
    res.status(500).json({
      message: 'Can not create shop',
    });
    }
}