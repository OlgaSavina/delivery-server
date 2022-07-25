import ProductModel from '../models/Product.js';


export const getOne = async (req, res) => {
    try {
      const productId = req.params.id;
  
      Productodel.findById(
        {
          _id: productId,
        },
        
        (err, doc) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: 'Не удалось вернуть статью',
            });
          }
  
          if (!doc) {
            return res.status(404).json({
              message: 'Статья не найдена',
            });
          }
  
          res.json(doc);
        },
      ).populate('shop');
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить статьи',
      });
    }
  };

  export const getAll = async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить статьи',
      });
    }
  };
  


export const create = async (req, res) => {
    try {
        const doc = new ProductModel({
            name:req.body.name,
            price:req.body.price,
            number:req.body.number,
            imageUrl:req.body.imageUrl,
            shop : req.shopId,

        });
    const product = await doc.save();

    res.json(product);

    } catch(err){
        console.log(err);
    res.status(500).json({
      message: 'Can not create product',
    });
    }
};