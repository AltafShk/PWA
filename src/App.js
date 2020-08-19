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
import WhyUs from './components/GetInvolved/whyus'
import MakeAnImpact from './components/GetInvolved/makeanimpact'
import CorporatePartner from './components/GetInvolved/corporatepartner';
import BloodDonation from './components/GetInvolved/blooddonation'
import DonateNow from './components/GetInvolved/donatenow';
import Videos from './components/NewsAndStories/videos';
import ContactUs from './components/contactus';
import Blogs from './components/NewsAndStories/blogs';
import ImpDonor from './components/blogs-pages/important-donor';
import ThalessemiaQuiz from './components/blogs-pages/thalessemia-quiz';
import Events from './components/NewsAndStories/events';
import CurrencyConverter from './components/Services/currencyconverter'
import ZakatCalculator from './components/Services/zakatcalculator'


function App() {
  return (
    <div>
      <Header/>
      <ZakatCalculator/>
      <Footer/>
    </div>
  );
}

export default App;
