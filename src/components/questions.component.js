import React from 'react';

export default class Questions extends React.Component{

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.array = [
      "Tell me about yourself",
      "How did you discover programming?",
      "Why do you want a career in programming?",
      "What is it about programming that inspired you to start a career as a developer?",
      "If you weren't a coder, what would you be?",
      "What's your favourite thing about coding?",
      "Where do you want to be in five years?",
      "What is React? Can you tell me about the virtual DOM",
      "What is Agile software development?",
      "What is Test Driven Development",
      "What digital trends excite you?",
      "What do you like to do outside of coding?",
      "What was your experience like at Makers?",
      "Tell me about your last role at Beamly?",
      "What makes you different from other Makers graduates?"
    ]
    this.state = {
      question: '',
     }
  }

  componentDidMount = () => {
    this.randomizer();
  }

  randomizer(){
    var randomElement = this.array[Math.floor(Math.random() * this.array.length)];

    this.setState({
      question: randomElement
    });
    
    return randomElement
  }

  onSubmit(event){
    event.preventDefault();
    var question = this.randomizer()
    console.log(question)
    var output = document.getElementById("output-text")
    output.innerHTML = question
  }

  render(){
    return (
      <div className="grid-container fluid">
        <div className="grid-x">
          <form className="cell text-center" onSubmit={this.onSubmit}>
            <input className="button secondary expand text-center btn btn-light" type="submit" value="Submit"/>
            <div className="text-center" id ="output-text"></div>    
          </form>
        </div>
      </div>
    );
  }
 
}

