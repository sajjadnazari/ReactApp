import React, { Component, Fragment } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { id: 1, title: 'test jsxghhgj 1 ' },
                { id: 2, title: 'test bbbbbbbb 2 ' },
                { id: 3, title: 'test wewewewe 3 ' },
                { id: 4, title: 'test asdasdvb 4 ' },
            ]
        }

        this.HandleSubmit = this.HandleSubmit.bind(this);
    }


    HandleSubmit(title) {
        this.setState(state => {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Math.random(4, 200), title: title }
                ]
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-white">
                                <div className="card-body">
                                    <AddTodo handleSubmit={this.handleSubmit} />
                                    <TodoList todos={this.state.todos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Todo