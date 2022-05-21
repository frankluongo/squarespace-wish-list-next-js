import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  products: [
    {
      assetUrl: String,
      excerpt: String,
      fullUrl: String,
      price: Number,
      productId: {
        type: String,
        unique: true,
      },
      quantity: Number,
      title: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
