import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
 
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
      },
    products:{
    type: mongoose.Schema.Types.Object,
    ref: 'Product'
    }
   
    
}
);

export default mongoose.model('Order', OrderSchema);