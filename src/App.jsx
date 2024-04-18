import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Parallax from './components/Parallax';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=./';
  }

  function getLang(name) {
    var cklst = document.cookie.split(';');
    if (cklst.length > 0) {
      var ck = cklst[0].split('=');
      if (ck[0] == ('lang')) {
        console.log(ck[1]);
      }
    }
    else {
      return 'en';
    }
  }
  
  return (
      <div>
        <Navbar />
        <Hero />
        <Parallax type='services' />
        <About />
        <Services />
        <Parallax type='portfolio' />
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Contact />
      </div>
  )
}

export default App
