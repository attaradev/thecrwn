import { all, call } from 'redux-saga/effects';
import { shopSagas } from '@state/shop/shop.sagas';
import { userSagas } from '@state/user/user.sagas';
import { cartSagas } from '@state/cart/cart.sagas';


export function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
};