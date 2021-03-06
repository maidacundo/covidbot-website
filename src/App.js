import React from 'react';

import MinimizableWebChat from './MinimizableWebChat';
import WebPageBackground from './WebPage.png';
import './App.css';

const App = () => (
  <div className="App">
    <img alt="product background" src={WebPageBackground} />
    <MinimizableWebChat />
  </div>
);

export default App;
