import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import PropTypes from "prop-types"
import FlipMove from 'react-flip-move';

export class Todos extends Component {

  render() {
    return (
      <div className="list-group">
        <FlipMove>
          {this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setDeleted={this.props.setDeleted} setCompleted={this.props.setCompleted} />
          ))}
        </FlipMove>

      </div>

    )
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos
