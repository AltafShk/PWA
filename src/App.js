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
import BoardOfGovernors from './components/About Us/boardofgovernors'
import AffiliationsAndCertifications from './components/About Us/affiliationscertifications'
import ShariahCompliance from './components/About Us/shariahcompliance'
import BloodTransfusionServices from './components/Services/bloodtransfusionservices'
import ThalassemiaDaycareCenter from './components/Services/thalassemiadaycarecenter'

function App() {
  return (
    <div>
      <Header/>
      <ThalassemiaDaycareCenter/>
      <Footer/>
    </div>
  );
}

export default App;
