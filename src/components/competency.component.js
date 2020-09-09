import React from 'react';

export default class Competency extends React.Component{

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.array = [
      "Describe a situation in which you led a team.",
      "Give an example of a time you handled conflict in the workplace.",
      "How do you maintain good working relationships with your colleagues?",
      "Tell me about a big decision you've made recently. How did you go about it?",
      "What has been your biggest achievement to date?",
      "Describe a project where you had to use different leadership styles to reach your goal.",
      "Tell me about a time when your communication skills improved a situation.",
      "How do you cope in adversity?",
      "Give me an example of a challenge you faced in the workplace and tell me how you overcame it.",
      "Tell me about a time when you showed integrity and professionalism.",
      "How do you influence people in a situation with conflicting agendas?",
      "Give an example of a situation where you solved a problem in a creative way.",
      "Tell me about a time that you made a decision and then changed your mind.",
      "Describe a situation where you were asked to do something that you'd never attempted previously.",
      "Tell me about a time when you achieved success even when the odds were stacked against you."
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
    var output = document.getElementById(`output-text-competency-${this.props.name}`)
    output.innerHTML = question
  }

  render(){
    return (
      <div className="grid-container fluid">
        <div className="grid-x">
          <h3 className="question subheader cell text-center">Competency question {this.props.name}</h3>
          <form className="cell text-center" onSubmit={this.onSubmit}>
            <input className="button secondary expand text-center btn btn-light" type="submit" value="Reveal Question"/>
            <div className="text-center" id={`output-text-competency-${this.props.name}`}></div>    
          </form>
        </div>
      </div>
    );
  }
 
}

