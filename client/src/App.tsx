import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home'
import Editor from './pages/editor/editor'
import NavBar from './components/navbar/NavBar'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar/>
          <Route path="/home" exact={ true } component={ Home } />
          <Route path="/editor" component={Editor} />
        </Router>

      </header>
    </div>
  );
}

export default App;
