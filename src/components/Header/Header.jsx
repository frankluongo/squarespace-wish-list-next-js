import Link from 'next/link';
import { RiHeart3Line } from 'react-icons/ri';

import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.Header}>
      <nav>
        <Link href="/products">
          <a>All Products</a>
        </Link>
        <Link href="/wishlist">
          <a>
            <RiHeart3Line />
            &nbsp; Your Wish List
          </a>
        </Link>
      </nav>
    </header>
  );
};
