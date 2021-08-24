import React from "react";
import './App.css';
import Todo from "./Components/Todo"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newChore: '', taskList: [], tasksViewable: 'all' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  
  componentDidMount() {
    let taskList = window.localStorage.getItem('taskList')
    if (taskList) {
      this.setState({ taskList: JSON.parse(taskList) })
    }
    else {
      window.localStorage.setItem('taskList', JSON.stringify(this.state.taskList))

    }
  }
  
  componentDidUpdate() {
    window.localStorage.setItem('taskList', JSON.stringify(this.state.taskList))

  }

  handleChange(event) {
    this.setState({ newChore: event.target.value })
  }

  handleSubmit(event) {
    if (this.state.newChore !== '') {
      let choreObj = {
        id: Date.now(),
        taskText: this.state.newChore,
        completed: false
      }
      this.setState({
        taskList: [...this.state.taskList, choreObj],
        newChore: '',
      })
    }
    event.preventDefault();
  }

  handleRemove(id) {
    const filterChores = this.state.taskList.filter(chore => chore.id !== id);
    this.setState({ taskList: filterChores });

  }

  handleComplete(id) {
    this.setState({
      taskList: this.state.taskList.map(choreObj => {
        if (choreObj.id === id) {
          choreObj.completed = !choreObj.completed
        }
        return choreObj
      })
    })
  }
  setFilter(newFilter){
    this.setState({tasksViewable: newFilter })

  }
  clearCompleted(){
    const filterCompleted = this.state.taskList.filter(item => !item.completed)
    this.setState({ taskList: filterCompleted })
  }

  render() {
    const filterHelper = item => {
      if (this.state.tasksViewable === 'all') {
        return item
      }
      if (item.completed && this.state.tasksViewable === 'completed') {
       return item
      }
      if (!item.completed && this.state.tasksViewable === 'active') {
        return item
      }
    }


    return (
      <div className="App container" >
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0 mt-5 p-2" />
          <p>Sparks 3D Designs To-Do List</p>
          <button type="button" onClick={() => this.setFilter('all')} className="btn btn-danger mx-3 mb-2">All Tasks</button>
          <button type="button" onClick={() => this.setFilter('active')} className="btn btn-danger mx-3 mb-2">Active Tasks</button>
          <button type="button" onClick={() => this.setFilter('completed')} className="btn btn-danger mx-3 mb-2">Completed Tasks</button>
          <button type="button" onClick={() => this.clearCompleted('clear')} className="btn btn-danger mx-3 mb-2">Clear Completed Tasks</button>
          <div className="card">
            <div className="card-body border-0">
              Tasks Left: {this.state.taskList.filter(item => !item.completed).length}
            </div>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" value={this.state.newChore} onChange={this.handleChange} className="form-control" placeholder="What do you need to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-danger" type="button" onClick={this.handleSubmit} value="Submit" id="button-addon2">Submit</button>
          </div>
        </form>

        { this.state.taskList.filter(filterHelper).map((item, index) => <Todo key={index} chore={item} handleRemove={this.handleRemove} handleComplete={this.handleComplete} />)}
      </div>
    );
  }
}

export default App;
