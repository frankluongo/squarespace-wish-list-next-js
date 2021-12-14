import dbConnect from '#lib/dbConnect';
import User from '#models/User';

dbConnect();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(500).json({
      error: 'Please send a POST request',
      status: 'failure',
    });
  }
  if (typeof req.body !== 'object' || !req.body.userId) {
    return res.status(500).json({
      error: 'Please send a User ID',
      status: 'failure',
    });
  }
  try {
    const user = await User.find({ userId: req.body.userId });
    const products = [...user.products, ...req.body.products];
    const newUser = await User.findOneAndUpdate(
      { userId: req.body.userId },
      { products }
    );
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
