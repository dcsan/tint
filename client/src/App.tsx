import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home'
import Editor from './pages/editor/editor'


import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/editor" component={Editor} />
        </Router>

      </header>
    </div>
  );
}

export default App;
