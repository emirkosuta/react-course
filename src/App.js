import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meal from './components/Meal/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {cartIsShown && <Cart onHideModal={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
