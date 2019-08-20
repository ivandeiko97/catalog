import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <main>
        { children }
      </main>
    </div>
  );
}

export default App;
