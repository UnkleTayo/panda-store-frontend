import axios from 'axios';
import { ADD_CART_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {
    data: { _id, name, image, price, countInStock },
  } = await axios.get(`/api/v1/products/${id}`);

  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      product: _id,
      name,
      image,
      price,
      countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
