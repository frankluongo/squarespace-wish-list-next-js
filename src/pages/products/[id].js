import { SingleProduct } from '#components/SingleProduct/SingleProduct';

export const Product = ({ item }) => {
  return <SingleProduct item={item} />;
};

export async function getStaticPaths() {
  const products = await fetch(process.env.SQUARESPACE_URI);
  const data = await products.json();
  const paths = data.items.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(process.env.SQUARESPACE_URI);
  const resData = await res.json();
  const item = resData.items.find((it) => it.id === id);
  return { props: { item } };
}

export default Product;
