import { useContext } from 'react';

import './shop.scss';

import { ProductsContext } from '../../contexts/products';
import ProductCard from '../../components/product-card/product-card';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
