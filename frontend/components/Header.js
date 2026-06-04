// Header Component
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>MenuClick</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/pedidos">Pedidos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
