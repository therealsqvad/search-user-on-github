import React from 'react';
import './App.css';
import SearchPage from '../../containers/SearchPage';
import CardsPage from '../../containers/CardsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <SearchPage />
          <CardsPage />
        </div>
      </header>
    </div>
  );
}

export default App;
