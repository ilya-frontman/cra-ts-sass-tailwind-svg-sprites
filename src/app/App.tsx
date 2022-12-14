import React from 'react';
import './App.scss';

import Sprite from '../assets/sprites/sprite.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg className="App-logo">
          <use xlinkHref={`${Sprite}#logo`} />
        </svg>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
