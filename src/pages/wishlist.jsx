import { WishList } from '#components/WishList/WishList';
import { useWishlist } from '#hooks/useWishlist';
import dbConnect from '#lib/dbConnect';
import User from '#models/User';

export const Wishlist = ({ data }) => {
  const parsedData = JSON.parse(data);
  return (
    <>
      <h2>Your Wish List</h2>
      <WishList items={parsedData} />
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  const user = await User.findOne({ userId: 'abc123' });
  if (!user) return { props: { data: JSON.stringify([]) } };
  const data = JSON.stringify(user.products);
  return { props: { data } };
}

export default Wishlist;
