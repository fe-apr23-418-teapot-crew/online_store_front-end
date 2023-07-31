import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <Header />
          <ProductList />
        </body>
      </html>
    </>
  );
}

export default App;
