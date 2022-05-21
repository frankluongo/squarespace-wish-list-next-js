import wishlist from '#lib/wishlist';
import { useState } from 'react';
import css from './WishList.module.css';

const WishListItem = ({ item, update }) => {
  async function onRemove() {
    const res = await wishlist.removeItem(item.productId);
    update(res.data.products);
  }

  return (
    <article className={css.WishListItem}>
      <img src={item.assetUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <section>
        <button onClick={onRemove}>Remove From Wishlist</button>
      </section>
    </article>
  );
};

export const WishList = ({ items }) => {
  const [stateItems, setStateItems] = useState(items);
  return (
    <section className={css.WishList}>
      {stateItems.map((item) => (
        <WishListItem item={item} key={item.id} update={setStateItems} />
      ))}
    </section>
  );
};
