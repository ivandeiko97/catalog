import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App({ children }) {
  return (
    <div className="App">
      <Header />
      { children }
    </div>
  );
}

export default App;
