import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'
// import About from './contents/About'
import Slide from './contents/Slide'
// import  PostTw  from '../src/contents/PostTw'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/review">
           
        </Route>
      </div>
      
    </Router>
  );
}

export default App;
