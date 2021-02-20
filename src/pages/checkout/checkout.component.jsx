import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem } from '@components/checkout-item/checkout-item.component';
import { StripeCheckoutButton } from '@components/stripe-button/stripe-button.component';
import { selectItemsInCart, selectCartTotal } from '@state/cart/cart.selectors';
import { formatAsMoney } from '@utils/cart.utils';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalBlock,
  WarningText
} from './checkout.styles';


const selector = createStructuredSelector({
  items: selectItemsInCart,
  cartTotal: selectCartTotal
});

export const CheckoutPage = () => {
  const { items, cartTotal } = useSelector(selector);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {items.map(item => (
        <CheckoutItem
          key={item.id}
          item={item}
        />
      ))}
      <TotalBlock>TOTAL: {formatAsMoney(cartTotal)}</TotalBlock>
      <WarningText>
        **Please use the following test credit card for checkout.
      <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningText>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutContainer>
  );
};