import React from 'react';

export default class Technical extends React.Component{

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.array = [
      "What is a Closure?",
      "Can you tell me when you would use a promise?",
      "Can you explain aync/await and when you would use it?",
      "What is the difference between == and ===",
      "Is javascript a single threaded or multiple threaded language?",
      "Can you tell me what the different data structures are in JavaScript?",
      'What do you understand by estimation? (e.g. planning poker, T-shirt sizing)',
      'How would you work out how long something would take?',
      'What do you understand about usability principles? (for front end jobs)',
      'What does the Single Responsibility Principle mean?',
      'What is encapsulation?',
      'Why would you program using TDD? What are the drawbacks?',
      'What do we mean by DRY?',
      'What is MVC and why would we use it?',
      'Whats the advantage of a no-sql database?',
      'How would you deploy code to production?',
      'What is a recent technical challenge you experienced and how did you solve it?',
      'How do you debug?',
      'What’s your process for using/learning about packages?',
      'How would you go about getting up to speed at our company?',
      'How would you build an API? What language would you use?',
      'Why do companies increasingly move towards using micro services?',
      'Have you ever used a grid system, and if so, what do you prefer?',
      'What is CRUD?',
      'What is the advantage in designing a RESTful API?',
      'What are the benefits of a SQL database over other types of data-stores?',
      'What’s the longest you’ve struggled on a problem?',
      'What do you think about web sockets?',
      'What does array inject do?',
      'What’s wrong with the error message “undefined is not a function"?',
      'What do we mean when we say Ruby is a human readable language?',
      'What is the Principle of Least Astonishment?',
      'What’s the difference between node and javascript',
      'What do we mean by prototypical inheritance?',
      'How would you optimise a system that is running slow?',
      'How does the internet work?'
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
    var output = document.getElementById(`output-text-tech-${this.props.name}`)
    output.innerHTML = question
  }

  render(){
    return (
      <div className="grid-container fluid">
        <div className="grid-x">
          <h3 className="question subheader cell text-center">Technical question {this.props.name}</h3>
          <form className="cell text-center" onSubmit={this.onSubmit}>
            <input className="button secondary expand text-center btn btn-light" type="submit" value="Reveal Question"/>
            <div className="text-center" id={`output-text-tech-${this.props.name}`}></div>    
          </form>
        </div>
      </div>
    );
  }
 
}

