import addToWishlist from '#utils/addToWishlist';
import getImage from '#utils/getImage';
import getPrice from '#utils/getPrice';
import Link from 'next/link';

import css from './ProductsGrid.module.css';

const Product = ({ item }) => {
  const imageUrl = getImage(item);

  async function onAdd() {
    const res = await addToWishlist(item);
    console.log(res);
  }

  return (
    <Link href={`/products/${item.id}`}>
      <a className={css.GridItem}>
        <img src={imageUrl} alt={item.title} />
        <section>
          <h3>{item.title}</h3>
          <p>{getPrice(item)}</p>
          <button onClick={onAdd}>Add To Wishlist</button>
        </section>
      </a>
    </Link>
  );
};

export const ProductsGrid = ({ items }) => {
  return (
    <section className={css.Grid}>
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </section>
  );
};
