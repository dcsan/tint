import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home'
import Editor from './pages/editor/editor'
import Chat from './pages/chat/chat'
import NavBar from './components/navbar/NavBar'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="content">
        <Router>
          <NavBar/>
          <Route path="/home" exact={ true } component={ Home } />
          <Route path="/editor" component={Editor} />
          <Route path="/chat" component={Chat} />
        </Router>

      </header>
    </div>
  );
}

export default App;
