import React from 'react';


import Products from './store/store';
import Store from './components/Store';

import './App.css';

function App() {
  return (
    <Store products={Products}/>
  );
}

export default App;
