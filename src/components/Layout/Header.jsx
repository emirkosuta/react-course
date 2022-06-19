import React from 'react';
import PropType from 'prop-types';
import classes from './Header.module.css';
import headerImage from '../../assets/header.jpg';
import HeaderCardButton from './HeaderCardButton';

function Header(props) {
  const { onShowCart } = props;
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt="A table full of delicios food" />
      </div>
    </>
  );
}

Header.propTypes = {
  onShowCart: PropType.func.isRequired,
};

export default Header;
