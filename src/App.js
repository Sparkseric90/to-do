import React from "react";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', taskList: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }
  handleSubmit(event){
    this.setState({taskList: [this.state.value]})
    this.setState({value:''})
    event.preventDefault();
  }
  render() {
    return (
      <div className="App container">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0" />
          <p>My Todo List</p>
        </div>
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3 mt-3">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="What do you need to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" value="Submit" id="button-addon2">Submit</button>
        </div>
      </form>
        <Todo word={this.state.taskList[0]}/>
      </div>
    );
  }
}

  export default App;