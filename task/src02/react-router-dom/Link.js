import React, { Component } from 'react'

export default class Link extends Component {
    render() {
        return (
            <div>
                <a href={'#'+this.props.to}>
                    {
                        this.props.children
                    }
                </a>
            </div>
        )
    }
}
