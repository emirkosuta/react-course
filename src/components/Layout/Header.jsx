import React from 'react';
import classes from './Header.module.css';
import headerImage from '../../assets/header.jpg';
import HeaderCardButton from './HeaderCardButton';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt="A table full of delicios food" />
      </div>
    </>
  );
}

export default Header;
