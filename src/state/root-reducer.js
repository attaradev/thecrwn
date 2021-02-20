import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from '@state/user/user.reducer';
import { cartReducer } from '@state/cart/cart.reducer';
import { directoryReducer } from '@state/directory/directory.reducer';
import { shopReducer } from '@state/shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
  })
);
