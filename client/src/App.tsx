import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import Home from './pages/home/home'
import Chat from './pages/chat/chat'
import ToDO from "./pages/todo/todo";

import Editor from './pages/editor/editor'
import NavBar from './components/navbar/NavBar'

import './App.css';


// window.REDUX_INITIAL_DATA
// FIXME
const REDUX_INITIAL_DATA = {
  items: []
}
const reduxStore = configureStore( REDUX_INITIAL_DATA );

const App: React.FC = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
          <Router>
            <NavBar />
            <div className='content'>
            <Route path="/home" exact={ true } component={ Home } />
            <Route path="/editor" component={Editor} />
            <Route path="/chat" component={Chat} />
            <Route path="/todo" component={ToDO} />
            </div>
          </Router>
        </div>
      </ReduxProvider>
  );
}

export default App;
