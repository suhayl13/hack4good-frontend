import React from 'react';

function App({ children }) {
  return (
    <div>
      <header>
        <h1>Minimart & Voucher System</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default App;
