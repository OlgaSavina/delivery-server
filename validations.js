import {body} from 'express-validator';


export const shopCreateValidation = [
    body('name').isLength({min : 2}).isString(),
];

export const productCreateValidation = [
    body('name').isLength({ min: 3 }).isString(),
    body('price').isNumeric(),
  
  ];

  export const orderCreateValidation = [
    body('name').isLength({ min: 3 }).isString(),
    body('email').isLength({ min: 3 }).isString(),
    body('phone').isLength({ min: 3 }).isString(),
    body('adress').isLength({ min: 3 }).isString(),
    
  
  ];