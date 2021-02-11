import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
