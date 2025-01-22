import React from 'react';
import './App.css';
import Counter from './components/Counter';
import payyLogo from './assets/payy.svg'; 

const App: React.FC = () => {
  return (
    <div className="app">
      <img src={payyLogo} alt="Payy Logo" className="logo" />
      <div className="app-container">
        <Counter />
      </div>
    </div>
  );
};

export default App;