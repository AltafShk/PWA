import React from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import History from './components/About Us/history'
import Mission from './components/About Us/mission'
import BoardOfGovernors from './components/About Us/boardofgovernors'
import AffiliationsAndCertifications from './components/About Us/affiliationscertifications'
import ShariahCompliance from './components/About Us/shariahcompliance'

function App() {
  return (
    <div>
      <Header/>
      <ShariahCompliance/>
      <Footer/>
    </div>
  );
}

export default App;
