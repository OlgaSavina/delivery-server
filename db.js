import mongoose from 'mongoose';

function mongooseConnectDB() {
    mongoose
    .connect(
      "mongodb+srv://savina:savina@cluster0.zgayyak.mongodb.net/delivery?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("db error", err));
}
export default mongooseConnectDB;
  
