import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Header/>
            <Todos/>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
