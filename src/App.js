import React, { Component } from 'react'
import Todos from "./components/Todos"
import './containersmall.css'
import AddTodo from "./components/AddTodo"

export class App extends Component {
  state = {
    todos: [

    ]
  }
  setDeleted = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }
  setCompleted = (id) => {
    this.setState(({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        console.log(todo);

        return todo
      })
    }))

  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 1,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">
            To-do List
          </h1>

        </div>
        <div className="container container-small">

          <Todos todos={this.state.todos} setDeleted={this.setDeleted} setCompleted={this.setCompleted} />
          <div style={{ margin: "30px auto", textAlign: "center" }} className="container container-small">
            <AddTodo addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

