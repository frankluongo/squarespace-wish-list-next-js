export default async function handler(_, res) {
  const products = await fetch(process.env.SQUARESPACE_URI);
  const data = await products.json();
  res.status(200).json(data);
}
