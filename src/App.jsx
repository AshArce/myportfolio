import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
