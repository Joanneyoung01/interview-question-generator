
import React from 'react';

export default class Process extends React.Component{

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.array = [
    'Tell me about a learning process you have used at Makers that you have found helpful.',
    'Why do you care about creating quality software, rather than just software that works?',
    'Explain agile in 30 seconds',
    'Explain how you work with Scrum and Kanban in an Agile environment.',
    'What do you value when writing code?',
    'Where do you put most of your focus when reviewing somebody else’s code?',
    'What really bugs you in a code review?',
    'Why do we use TDD? Should we always TDD?',
    'Which tools have you used for testing your code quality?',
    'How can you debug a program while it’s being used?',
    'How do you ensure your program runs smoothly and fast?',
    'How can you ensure changes in code will not affect any other parts of the product?',
    'What do you love about testing?',
    'What kind of challenges does testing present? Can you tell me about some specific software testing challenges you’ve faced, and how you overcame them?',
    'How do you prioritize your testing? What factors might influence your decisions?',
    'What are the benefits of pairing? Is pairing always a good thing?',
    'Why are “hackers” or “hacky code” looked down upon? Doesn’t it mean you write quicker code?',
    'What are Kent Beck’s design principles?',
    'What are the Software Craftsmanship principles and what do they mean to you?',
    'How do you write quality software?',
    'What is Kanban?',
    'What is the purpose of a retrospective? Why would you run a morning standup?',
    'How do you document your code? How much do you do this?',
    'What do you find hardest about programming?',
    'Which code repository do you use and why?',
    'Describe your workflow',
    'How often do you refactor your code?',
    'Why do we bother following DRY? Isn’t it easier just to copy and paste?',
    'What’s the point in writing clear git commit messages?',
    'Which SOLID principle do you think is the most important in coding?',
    'What are XP Values?',
    'Are you familiar with design patterns? What design pattern have you used and in what situations?',
    'How do you prioritize program requirements? Mention any different techniques you know.',
    'Describe the process of writing a piece of code from requirements to delivery.',
    'Describe a time when you managed to reduce the user’s perception of waiting. What features did you use?',
    'How do you deal with deadlines?',
    'What is your plan for managing your own learning on the job?',
    'Tell me about a significant challenge you have overcome',
    'Have you ever experienced conflict during a team project? How did you solve it?',
    'What would you bring to our working culture?',
    'Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?',
    'Tell me about something you are really proud of achieving',
    'Tell me about something that is challenging to you personally that you are working to overcome?',
    'How has your previous experience helped you become a better developer?',
    'What would you like to be doing in three years time?'
  ];

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
          <h3 className="question subheader cell text-center">Behavior and process question {this.props.name}</h3>
          <form className="cell text-center" onSubmit={this.onSubmit}>
            <input className="button secondary expand text-center btn btn-light" type="submit" value="Reveal Question"/>
            <div className="text-center" id={`output-text-process-${this.props.name}`}></div>    
          </form>
        </div>
      </div>
    );
  }
 
}

