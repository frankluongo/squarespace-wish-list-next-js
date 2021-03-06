import dbConnect from '#lib/dbConnect';
import User from '#models/User';
import apiErrorHandler from '#utils/apiErrorHandler';

dbConnect();

export default async function handler(req, res) {
  apiErrorHandler(req, res);
  try {
    const user = await User.findOne({ userId: req.body.userId });
    res.status(200).json({
      error: null,
      status: 'success',
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      error: e,
      status: 'failure',
    });
  }
}
