import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@components/button/button.component';
import { CartItem } from '@components/cart-item/cart-item.component';
import { selectItemsInCart } from '@state/cart/cart.selectors';
import { toggleCartHidden } from '@state/cart/cart.actions';
import {
  DropdownContainer,
  CartItems,
  EmptyCart
} from './cart-dropdown.styles';

export const CartDropdown =() => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector(selectItemsInCart);
    const handleClick = () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    };

    return (
      <DropdownContainer>
        <CartItems>
          {
            items?.length
              ? items.map(item => <CartItem key={item.id} item={item} />)
              : <EmptyCart>Your cart is empty.</EmptyCart>
          }
        </CartItems>
        <Button
          onClick={handleClick}
        >Go to checkout</Button>
      </DropdownContainer>)
  };
