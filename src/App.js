import React from 'react';
import General from "./components/general.component";
import Header from "./components/header.component";
import Competency from './components/competency.component';
import Technical from './components/technical.component';
import Motivation from './components/motivation.component';
import Process from './components/process.component';

function App() {
  return (
    <div className="container"> 
      <Header />
      <General />
      <Motivation name="1"/>
      <Motivation name="2"/>
      <Competency name="1"/>
      <Competency name="2"/>
      <Technical name="1" />
      <Technical name="2" />
      <Process name="1" />
      <Process name="2" />
      <div className="footer">Intended for education purposes only</div>
    </div>
    
  );
}

export default App;
