import { Header } from '#components/Header/Header';

import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.Content}>{children}</main>
      <footer className={css.Footer}>Copyright &copy; 2021</footer>
    </>
  );
};
