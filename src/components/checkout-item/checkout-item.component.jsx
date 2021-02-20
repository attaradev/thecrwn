import { useDispatch } from 'react-redux';
import { decreaseItem, increaseItem, removeItemFromCart } from '@state/cart/cart.actions';
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles';



export const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeItemFromCart(item));
  const decrease = () => dispatch(decreaseItem(item));
  const increase = () => dispatch(increaseItem(item));
  const { name, imageUrl, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={decrease}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increase}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice>
        {
          formatAsMoney(price)
        }
      </ItemPrice>
      <RemoveButton onClick={remove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
};