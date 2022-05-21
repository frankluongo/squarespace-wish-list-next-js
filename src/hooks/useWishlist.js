import { useEffect, useState } from 'react';
import wishlist from '#lib/wishlist';

export function useWishlist(method) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetcher() {
      const wishlistData = await wishlist[method]();
      setData(wishlistData);
    }
    fetcher();
  }, []);

  return data;
}
