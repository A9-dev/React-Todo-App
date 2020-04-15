import React, { Component } from 'react'
import PropTypes from "prop-types"
import "../todoitem.css"
export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      textAlign: "center"
    }

  }

  render() {
    return (
      <div className="row">
        <div className="col-10">
          <button type="button" style={this.getStyle()} onClick={this.props.setCompleted.bind(this, this.props.todo.id)} className="list-group-item list-group-item-action"><div className="h3">{this.props.todo.title}</div></button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-secondary vertical-center" onClick={this.props.setDeleted.bind(this, this.props.todo.id)}>╳</button>
        </div>

      </div >

    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
