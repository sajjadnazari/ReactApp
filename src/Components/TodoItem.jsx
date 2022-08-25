import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item">
            <div className="checker"><span className=""><input type="checkbox" /></span></div>
            <span>{props.title}</span>
            <i className="icon-close"></i>
        </div>
    )
}
