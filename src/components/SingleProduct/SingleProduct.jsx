import addToWishlist from '#utils/addToWishlist';
import getImage from '#utils/getImage';

import css from './SingleProduct.module.css';

export const SingleProduct = ({ item }) => {
  const imageUrl = getImage(item);

  async function onAdd() {
    const res = await addToWishlist(item);
    console.log(res);
  }
  return (
    <section className={css.Product}>
      <figure>
        <img src={imageUrl} alt={item.title} />
      </figure>
      <aside>
        <button onClick={onAdd}>Add To Wish List</button>
      </aside>
    </section>
  );
};
