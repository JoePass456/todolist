import React from 'react';
import Heading from './Heading';
import Display from './Display';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortStatus: 'current',
      value: '',
      
    }
       
  }

  componentDidMount() {
    //console.log('mounted');
    this.currentTaskList = JSON.parse(localStorage.getItem('list'));
    // //if no data set to empty string
    if (!this.currentTaskList) {this.currentTaskList= []};     

  }
  componentDidUpdate() {
    //console.log('updated');
  }

  //handles buttons that change status filters
  handleClick = (e) => {
    this.setState({ sortStatus: e.target.dataset.id });
  }

  //handles the input window.
  handleChange = (e) => this.setState({ value: e.target.value });

  //handles when you hit the submit button
  handleSubmit = (e) => {
    e.preventDefault();
    let taskItem = {};
    taskItem.task = this.state.value;
    taskItem.status = 'current';
    taskItem.id = Date.now();
    console.log(taskItem);  
    this.currentTaskList.push(taskItem);  
    this.setState({value: ''});
    localStorage.setItem('list', JSON.stringify(this.currentTaskList));
  }
  render() {
    return (
      <div className="container">
        <Heading title="Todo List:" />
        <div className="row">
          <div className="col-12 border text-center">
            <form onSubmit={this.handleSubmit}>
              <label>New task:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.handleClick} data-id="current" className="btn btn-secondary btn-sm p-1" >Current tasks </button>
            <button onClick={this.handleClick} data-id="complete" className="btn btn-secondary btn-sm p-1">Complete tasks </button>
            <button onClick={this.handleClick} data-id="all" className="btn btn-secondary btn-sm p-1">All tasks</button>
          </div>
        </div>
        <Display sortStatus={this.state.sortStatus} />
      </div>
    )
  }
}

export default App;
