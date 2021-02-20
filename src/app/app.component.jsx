import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '@components/header/header.component';
import { HomePage } from '@pages/homepage/homepage.component';
import { ShopPage } from '@pages/shop/shop.component';
import { ContactPage } from '@pages/contact/contact.component';
import { SignInPage } from '@pages/sign-in/sign-in.component';
import { SignUpPage } from '@pages/sign-up/sign-up.component';
import { CheckoutPage } from '@pages/checkout/checkout.component';
import { Footer } from '@components/footer/footer.component';
import { checkUserSession } from '@state/user/user.actions';
import { NotFoundPage } from '@pages/404/404.component';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
`;

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' component={SignInPage} />
        <Route path='/register' component={SignUpPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppContainer>
  )
};
