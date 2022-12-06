import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />

        </Routes>
      </div>
    );
  }
}

export default App;
