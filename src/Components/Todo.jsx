import React, { Component, Fragment } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-white">
                                <div class="card-body">
                                    <AddTodo />
                                    <TodoList />
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