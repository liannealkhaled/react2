import { products } from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productslist = products.map((product) => {
    return <ProductItem product={product} />;
  });

  return <div className="productcard">{productslist}</div>;
};

export default ProductList;
