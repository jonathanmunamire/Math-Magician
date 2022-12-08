import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Home from './components/home';
import Quote from './components/quote';
import Footer from './components/footer';

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
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
