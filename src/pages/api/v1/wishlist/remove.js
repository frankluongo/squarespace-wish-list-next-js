import dbConnect from '#lib/dbConnect';
import User from '#models/User';
import apiErrorHandler from '#utils/apiErrorHandler';

dbConnect();

export default async function handler(req, res) {
  apiErrorHandler(req, res);
  try {
    const user = await User.findOne({ userId: req.body.userId });
    const products = user.products.filter(
      (item) => item.productId !== req.body.productId
    );
    const newUser = await User.findOneAndUpdate(
      { userId: req.body.userId },
      { products },
      { new: true }
    );
    newUser.save();
    res.status(200).json({
      error: null,
      status: 'success',
      data: newUser,
    });
  } catch (e) {
    res.status(400).json({
      error: e,
      status: 'failure',
    });
  }
}
