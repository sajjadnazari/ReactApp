import React, { Component } from 'react'
import Post from './Post'
class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <Post />
                <div className="comments">
                    <p>Comments:</p>
                    <div className="comment">
                        <p>Comment 1</p>
                    </div>
                    <div className="comment">
                        <p>Comment 2</p>
                    </div>
                    <div className="comment">
                        <p>Comment 3</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content