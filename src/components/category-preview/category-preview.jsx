import { Link } from 'react-router-dom';

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

import ProductCard from '../product-card/product-card';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
