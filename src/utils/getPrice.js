export default function getPrice(item) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const price = item.variants[0].price / 100;
  return formatter.format(price);
}
