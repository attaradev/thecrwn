import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartIcon } from '@components/cart-icon/cart-icon.component';
import { CartDropdown } from '@components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '@assets/crown.svg';
import { signOut } from '@state/user/user.actions';
import { selectCurrentUser } from '@state/user/user.selectors';
import { selectCartHidden } from '@state/cart/cart.selectors';
import {
  HeaderContainer,
  NavigationContainer,
  LogoContainer,
  NavigationLink
} from './header.styles';

const selector = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, hidden } = useSelector(selector);
  const logout = () => dispatch(signOut());
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <NavigationContainer>
        <NavigationLink to='/shop'>Shop</NavigationLink>
        <NavigationLink to='/contact'>Contact</NavigationLink>
        {
          currentUser === null
            ? <NavigationLink to='/login'>Sign in</NavigationLink>
            : <NavigationLink as='div' onClick={logout}>Sign out</NavigationLink>
        }
        <CartIcon />
      </NavigationContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}