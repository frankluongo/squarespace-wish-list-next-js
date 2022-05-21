export default function apiErrorHandler(req, res) {
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
}
