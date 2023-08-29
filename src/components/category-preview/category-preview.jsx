import { Link } from 'react-router-dom';

import './category-preview.scss';

import ProductCard from '../product-card/product-card';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="nav-link" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
