import React from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import History from './components/About Us/history'
import Mission from './components/About Us/mission'
import FinancialReport from './components/Publications/financialReports';
import DepartmentalReport from './components/Publications/departmentalReports';
import Qasid from './components/Publications/qasid';
import Souvenir from './components/Publications/souvenir';
import SuccesStories from './components/NewsAndStories/successStories';

function App() {
  return (
    <div>
      <Header/>
      <Souvenir/>
      <Footer/>
    </div>
  );
}

export default App;
