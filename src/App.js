import React from 'react';
import Heading from './Heading';
import Nav from './Nav';
import Display from './Display';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortStatus: 'all'
    }
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Heading title="Todo List:" />
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.handleClick} key="current" className="btn btn-secondary btn-sm">Current tasks </button>
            <button onClick={this.handleClick} key="complete" className="btn btn-secondary btn-sm">Complete tasks </button>
            <button onClick={this.handleClick} key="all" className="btn btn-secondary btn-sm">All tasks</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Display sortStatus={this.state.sortStatus}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
