import React from 'react';
import './App.css';
import HeaderHandler from './components/header/HeaderHandler';

function App({ children }) {
  return (
    <div className="App">
      <HeaderHandler />
      <main>
        { children }
      </main>
    </div>
  );
}

export default App;
