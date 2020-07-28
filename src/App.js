import React from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import History from './components/About Us/history'
import Mission from './components/About Us/mission'

function App() {
  return (
    <div>
      <Header/>
      <Mission/>
      <Footer/>
    </div>
  );
}

export default App;
