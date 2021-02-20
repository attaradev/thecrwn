import { useDispatch, useSelector } from 'react-redux';
import { selectItemsInCartCount } from '@state/cart/cart.selectors';
import { toggleCartHidden } from '@state/cart/cart.actions';
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';


export const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectItemsInCartCount);
  const toggleCart = () => dispatch(toggleCartHidden());
  
  return (
    <CartContainer onClick={toggleCart} >
      <ShoppingIcon />
      <ItemCountContainer> {itemsCount} </ItemCountContainer>
    </CartContainer>
  );
}