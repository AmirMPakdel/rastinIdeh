import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './sections/Footer';
import IntroSec from './sections/IntroSec';
import OurTeam from './sections/OurTeam';
import Resume from './sections/Resume';
import ServiceSec from './sections/ServiceSec';

function App() {
  return (
    <div className="App">
      <Header/>
      <IntroSec/>
      <ServiceSec/>
      <Resume/>
      <OurTeam/>
      <Footer/>
    </div>
  );
}

export default App;
