import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ToDo from "./component/ToDo";
import InputTodo from "./component/InputTodo";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  toggleComplete = id => {
    // console.log("hello am clicked");
    this.setState({
      todos: this.state.todos.map(items => {
        if (items.id === id) {
          items.completed = !items.completed;
        }
        return items;
      })
    });
  };
  deletItem = id => {
    const newTodos = this.state.todos.filter(elem => {
      return elem.id !== id;
    });
    this.setState({
      todos: newTodos
    });
  };
  addItems = e => {
    const newItem = {
      id: this.state.todos.length + 1,
      title: e
    }
    const todos = [...this.state.todos];
    todos.push(newItem);
    this.setState({
      todos: todos
    });
  };
  render() {
    const myList = this.state.todos;
    return (
      <div className="App">
        <h1 style={{ backgroundColor: "gray" }}>My Todo List</h1>
        <InputTodo addItems={this.addItems} />
        <ToDo
          todos={myList}
          toggleComplete={this.toggleComplete}
          deletItem={this.deletItem}
        />
      </div>
    );
  }
}

export default App;
