import wishFetch from '#utils/wishFetch';

const userId = 'abc123';

export default {
  addItem: async (product) =>
    wishFetch('/api/v1/wishlist/add', JSON.stringify({ userId, product })),
  getWishlist: async () =>
    wishFetch('/api/v1/wishlist', JSON.stringify({ userId })),
  removeItem: async (productId) =>
    wishFetch('/api/v1/wishlist/remove', JSON.stringify({ userId, productId })),
};
