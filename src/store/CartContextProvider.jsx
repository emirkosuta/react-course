import React, { useMemo, useState } from 'react';
import PropType from 'prop-types';
import CartContext from './cart-context';
import DUMMY_MEALS from '../components/Meal/dummy-meals';

function CartContextProvider(props) {
  const { children } = props;
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items], item);
    console.log(item);
  };

  const removeItemFromCartHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const cartContext = useMemo(
    () => ({
      items: DUMMY_MEALS,
      totalAmount: 0,
      addItemToCart: addItemToCartHandler,
      removeItemFromCart: removeItemFromCartHandler,
    }),
    [items],
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default CartContextProvider;
