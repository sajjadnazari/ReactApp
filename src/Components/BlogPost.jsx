import React from 'react';
import style from './blogpost.css';
import Sidebar from './Sidebar';
import Content from './Content';

class BlogPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Sidebar />
                <Content />
            </>
        )
    }
}

export default BlogPost