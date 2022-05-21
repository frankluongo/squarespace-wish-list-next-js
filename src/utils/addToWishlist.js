import wishlist from '#lib/wishlist';
import getImage from './getImage';

export default async function addToWishlist(item) {
  const imageUrl = getImage(item);
  return await wishlist.addItem({
    assetUrl: imageUrl,
    excerpt: item.excerpt,
    fullUrl: item.fullUrl,
    price: item.variants[0].price,
    productId: item.id,
    quantity: 1,
    title: item.title,
  });
}
