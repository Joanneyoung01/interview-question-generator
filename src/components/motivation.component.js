
import React from 'react';

export default class Motivation extends React.Component{

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.array = [
    'What shows us you are going to keep on learning to become an experience software developer?',
    'Whats a technology trend you are excited about?',
    'Where is technology heading in the next five years in your opinion?',
    'Tell me something interesting you have recently learned in a blog, article or book you have read.',
    'Tell me something cool you found out about coding recently.',
    'What IDE do you use?',
    'Who do you look up to in the coding world? (Favourite blog, Hacker News, Twitter etc.)',
    'What new languages or frameworks interest you?',
    'What languages are you most excited about now?',
    'What’s your coding set up?',
    'Tell me about an open source project you have contributed to or used.',
    'What do you think about the move towards everything being in Javascript?',
    'What is your favourite programming language?',
    'Do you consider yourself a front-end or back-end developer? Why? Should there be a difference?',
    'Do you think there should be front-end and back-end developers, or should everyone be full-stack?',
    'You say on your CV that you like using [any tech listed] What is your favourite thing about [aforementioned tech]?',
    'What do you like/dislike about Ruby/JS etc.?'];

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
    var output = document.getElementById(`output-text-motivation-${this.props.name}`)
    output.innerHTML = question
  }

  render(){
    return (
      <div className="grid-container fluid">
        <div className="grid-x">
          <h3 className="question subheader cell text-center">Motivation question {this.props.name}</h3>
          <form className="cell text-center" onSubmit={this.onSubmit}>
            <input className="button secondary expand text-center btn btn-light" type="submit" value="Reveal Question"/>
            <div className="text-center" id={`output-text-motivation-${this.props.name}`}></div>    
          </form>
        </div>
      </div>
    );
  }
 
}

