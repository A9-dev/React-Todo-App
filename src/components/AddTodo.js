import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ title: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: "" })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div>

                            <input type="text" placeholder="Todo" name="todoTitle" style={{ padding: "7px 20px", border: "none" }} value={this.state.title}
                                onChange={this.onChange} />
                        </div>

                        <input
                            type="submit"
                            value="Submit"
                            style={{ display: "inline-block", background: "rgb(68,68,68)", color: "#fff", border: "none", padding: "7px 20px" }}

                        />

                    </div>
                </form>
            </div>

        )
    }
}

export default AddTodo
