import { RiHeart3Line } from 'react-icons/ri';

export const Header = () => {
  return (
    <header>
      <button>
        <RiHeart3Line />
        <span className="sr-only">Your Wish List</span>
      </button>
    </header>
  );
};
