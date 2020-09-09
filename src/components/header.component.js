import React from 'react';

export default class Header extends React.Component{



  render(){
    return (
      <div className="grid-container fluid">
        <div className="grid-x">
          <h1 class="header subheader cell text-center">Interview Question Generator</h1>
          <h3 class="question subheader cell text-center">Click button to generate question</h3>
        </div>
      </div>
    );
  }
 
}

