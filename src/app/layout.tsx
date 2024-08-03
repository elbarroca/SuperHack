import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Layout;
