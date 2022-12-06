import './index.css';
import React from 'react';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Home from './components/home';
import Quote from './components/quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Calculator />
        <Quote />
      </div>
    );
  }
}

export default App;
