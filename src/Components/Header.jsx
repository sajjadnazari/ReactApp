import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ inputText: event.target.value });
  }

  onSubmitHandler() {
    this.props.onSubmitHandler(this.state.inputText);
  }

  render() {
    return (
      <div className="header">
        <h2>{this.props.headerTitle}</h2>
        <input onChange={this.onChangeHandler} type="text" />
        <span onClick={this.onSubmitHandler} className="addBtn">
          Add
        </span>
      </div>
    );
  }
}

export default Header;
