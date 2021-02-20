import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { formatAsMoney } from '@utils/cart.utils';
import { clearCart } from '@state/cart/cart.actions';
import env from '@utils/env.utils';


export const StripeCheckoutButton =
  ({ price }) => {
    const dispatch = useDispatch();
    const priceForStripe = price * 100;
    const publishableKey = env.STRIPE_API_KEY

    const onToken = token => {
      console.log(token);
      dispatch(clearCart());
      alert('Payment Successful');
    };

    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN, Inc'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your cart total is ${formatAsMoney(price)}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };