export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(500).json({
      error: 'Please send a POST request',
      status: 'failure',
    });
  }
  if (typeof req.body !== 'object' || !res.body.userId) {
    return res.status(500).json({
      error: 'Please send a User ID',
      status: 'failure',
    });
  }

  console.log(req.body.userId);

  res.status(200).json({
    error: null,
    status: 'success',
  });
}
