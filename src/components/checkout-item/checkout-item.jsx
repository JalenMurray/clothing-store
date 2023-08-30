import {
  CheckoutItemContainer,
  ImageContainer,
  DetailInfo,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ item, addHandler, removeHandler }) => {
  const { name, imageUrl, price, quantity } = item;

  const addSingleItemToCart = () => addHandler(item);

  const removeSingleItemFromCart = () => removeHandler(item);

  const removeAllItemFromCart = () => removeHandler(item, true);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <DetailInfo>{name}</DetailInfo>
      <Quantity>
        <Arrow onClick={removeSingleItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addSingleItemToCart}>&#10095;</Arrow>
      </Quantity>
      <DetailInfo>${price}</DetailInfo>
      <RemoveButton onClick={removeAllItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
