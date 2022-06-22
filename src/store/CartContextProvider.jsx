import React, { useMemo, useReducer } from 'react';
import PropType from 'prop-types';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }
  if (action.type === 'REMOVE') {
    return {
      items: state.items.filter((item) => item.id !== action.id),
      totalAmount: state.totalAmount,
    };
  }

  return defaultCartState;
};

function CartContextProvider(props) {
  const { children } = props;

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id });
  };

  const cartContext = useMemo(() => {
    const { items, totalAmount } = cartState;
    return {
      items,
      totalAmount,
      addItemToCart: addItemToCartHandler,
      removeItemFromCart: removeItemFromCartHandler,
    };
  }, [cartState]);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default CartContextProvider;
