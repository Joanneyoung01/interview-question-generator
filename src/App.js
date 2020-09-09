import React from 'react';
import Questions from "./components/questions.component";
import Header from "./components/header.component";
import Competency from './components/competency.component';

function App() {
  return (
    <div className="container"> 
      <Header />
      <Questions />
      <Competency name="1"/>
      <Competency name="2"/>
      <Competency name="3"/>
      <div className="footer">Intended for education purposes only</div>
    </div>
    
  );
}

export default App;
