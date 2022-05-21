import { ProductsGrid } from '#components/ProductsGrid/ProductsGrid';

export const AllProducts = ({ data }) => {
  return <ProductsGrid items={data.items} />;
};

export async function getStaticProps(context) {
  const products = await fetch(process.env.SQUARESPACE_URI);
  const data = await products.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default AllProducts;
