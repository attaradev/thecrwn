import { addItemToCart, removeItemFromCartIfQuantityIsZero } from '@utils/cart.utils';
import { CartTypes } from './cart.actions';

const INITIAL_STATE = {
  hidden: true,
  itemsInCart: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEM:
      return { ...state, itemsInCart: addItemToCart(state.itemsInCart, action.payload) }
    case CartTypes.REMOVE_ITEM_FROM_CART:
      return { ...state, itemsInCart: state.itemsInCart.filter(itemInCart => itemInCart.id !== action.payload.id) }
    case CartTypes.DECREASE_ITEM:
      return { ...state, itemsInCart: removeItemFromCartIfQuantityIsZero(state.itemsInCart, action.payload) }
    case CartTypes.INCREASE_ITEM:
      return { ...state, itemsInCart: addItemToCart(state.itemsInCart, action.payload) }
    case CartTypes.CLEAR_CART:
      return INITIAL_STATE
    default:
      return state;
  }
};
