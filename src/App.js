import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
import Thalassemia from './components/blogs-pages/thalassemia';
import Events from './components/NewsAndStories/events';
import ZakaatCalculator from './components/Services/calculateZakaat';
import Converter from './components/Services/currencyConverter';
// import SignUp from './components/signup';
// import SignIn from './components/signin'
import DonateBlood from './components/blogs-pages/donate-blood';
import DonateMoney from './components/donatemoney'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/history' component={History} />
            <Route path='/mission' component={Mission} />
            <Route path='/board-of-governors' component={BoardOfGovernors} />
            <Route path='/affiliations-and-certifications' component={AffiliationsAndCertifications} />
            <Route path='/shariah-compliance' component={ShariahCompliance} />
            <Route path='/donate-blood' component={DonateBlood} />
            <Route path='/important-donor' component={ImpDonor} />
            <Route path='/thalassemia' component={Thalassemia} />
            <Route path='/thalassemia-quiz' component={ThalessemiaQuiz} />
            <Route path='/blood-donation' component={BloodDonation} />
            <Route path='/corporate-partner' component={CorporatePartner} />
            <Route path='/donate-now' component={DonateNow} />
            <Route path='/make-an-impact' component={MakeAnImpact} />
            <Route path='/why-us' component={WhyUs} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/events' component={Events} />
            <Route path='/success-stories' component={SuccesStories} />
            <Route path='/videos' component={Videos} />
            <Route path='/departmental-report' component={DepartmentalReport} />
            <Route path='/financial-report' component={FinancialReport} />
            <Route path='/qasid' component={Qasid} />
            <Route path='/souvenir' component={Souvenir} />
            <Route path='/blood-transfusion-services' component={BloodTransfusionServices} />
            {/* <Route path='/zakaat-calculator' component={ZakaatCalculator} /> */}
            {/* <Route path='/currency-converter' component={Converter} /> */}
            <Route path='/thalassemia-daycare-center' component={ThalassemiaDaycareCenter} />
            {/* <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} /> */}
            <Route path = '/donate-money' component = {DonateMoney}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
