import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        var style = {

            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.color,
            textDecoration: 'none',
            padding: '8px',
            borderRadius: '4px',
            letterSpacing: '2px',
            boxShadow: '1px 1px 3px grey',
            textAlign: 'center',
            color: 'white'


        }
        return (

            <a href="#" onClick={this.props.onClick} style={style}>{this.props.text}</a>

        );
    }
}