import React, { Component } from 'react';
import Button from './button';


export default class Dashboard extends Component {

    render() {

        return (
            <div>
                <Button text='Signout' color='#7ad5c9' height='50px' width='80px' onClick={this.props.signOut} />
            </div>
        );
    }

}