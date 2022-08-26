import React, { Fragment, PureComponent } from "react";
import TodoList from "./TodoList";
import Header from "./Header";

class Todo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "test asdasd 1" },
        { id: 2, title: "test werewr 2" },
        { id: 3, title: "test bvnmna 3" },
        { id: 4, title: "test lkopop 4" },
      ],
      headerTitle: "Todo Application",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(title) {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, { id: Math.random(5, 20), title: title }],
      };
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          headerTitle={this.state.headerTitle}
          onSubmitHandler={this.onSubmit}
        />
        <TodoList todos={this.state.todos} />
      </Fragment>
    );
  }
}

export default Todo;
