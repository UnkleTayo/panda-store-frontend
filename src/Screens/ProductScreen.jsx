import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Ratings from '../Components/Ratings';
import axios from 'axios';

const ProductScreen = ({ match, ...props }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/v1/products/${match.params.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product?.image} fluid alt={product?.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>{product?.name}</h2>{' '}
            </ListGroupItem>
            <ListGroupItem>
              <Ratings
                value={product?.rating}
                text={`${product?.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product?.price}</ListGroupItem>
            <ListGroupItem>Description: ${product?.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
