import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>Copyright &copy; {new Date().getFullYear()} Panda Store </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
