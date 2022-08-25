import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onChangeInput(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  onClickSubmit() {
    this.props.handleSubmit(this.state.inputText);
  }

  render() {
    return (
      <div action="">
        <input
          type="text"
          className="form-control add-task"
          onChange={this.onChangeInput}
          placeholder="New Task..."
        />
        <button onClick={this.onClickSubmit} className="btn btn-success">
          Add Task
        </button>
      </div>
    );
  }
}
