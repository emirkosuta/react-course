import React from 'react';
import Header from './components/Layout/Header';
import Meal from './components/Meal/Meals';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
