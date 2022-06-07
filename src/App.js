import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart';
import CardProvider from './components/store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;

// Window.localStorage:
// Allows one to access a Storage object for the Document's origin; the stored data is saved across browser sessions.
