
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '50px',
        fontSize: '30px'
    }}>
        APP COMPONENT IS WORKING!
    </div>
  );
}

export default App;



