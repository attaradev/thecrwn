import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsInCartCount } from '@state/cart/cart.selectors';
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';
import { toggleCartHidden } from '@state/cart/cart.actions';


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