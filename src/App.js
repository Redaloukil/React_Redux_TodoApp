import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Todos/>
        <Footer/>
      </div>
    );
  }
}

export default App;
