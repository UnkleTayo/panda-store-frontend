import React, { useEffect } from 'react';
import { LINK } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListenGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history, ...props }) => {
  const productId = match.params.id;

  const qty = location.search ? +location.search.split('=')[1] : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>Cart</div>;
};

export default CartScreen;
