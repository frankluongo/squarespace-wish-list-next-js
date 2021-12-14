import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  products: [
    {
      productId: {
        type: String,
        unique: true,
      },
      quantity: Number,
      excerpt: String,
      assetUrl: String,
      fullUrl: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
