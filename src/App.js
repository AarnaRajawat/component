import React from 'react';
import './index.css'; // Make sure this is importing your Tailwind setup
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard />
      </header>
    </div>
  );
}

export default App;
