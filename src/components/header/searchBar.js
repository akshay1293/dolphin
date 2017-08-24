import React, { Component } from 'react';

export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <input maxLength='20' style={SearchBarStyle} type='text' placeholder='search' onKeyPress={this.keyPressHandler.bind(this)} />
            </div>
        );
    }

    keyPressHandler(e) {

        console.log(e.target.value);
    }
}

const SearchBarStyle = {
    width: '460px',
    marginLeft: '-50px',
    borderRadius: '20px',
    border: 'none',
    padding: '7px 20px',
    fontSize: '16px',
    background: 'rgba(255,255,255,0.5)',
    color: '#34495E',
    outline: 'none'
}