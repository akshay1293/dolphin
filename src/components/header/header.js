import React, { Component } from 'react';
import cookies from 'universal-cookie';

export default class Header extends Component {

    constructor(props) {

        super(props);
        this.state = {

            toggle: false,
        }
        this.cookie = new cookies();
    }

    render() {
        this.userData = this.cookie.get('dolphinUser');
        const style = {
            container: {
                backgroundColor: 'rgba(122,213,201,0.7)',
                padding: '0 10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1
            },
            profile: {
                fontSize: '13px',
            },
            userImage: {

                height: '25px',
                width: '25px',
                borderRadius: '50%',
                backgroundColor: 'gray',
                border: '1px solid black',
            },
            popupContainer: {
                visibility: (this.state.toggle) ? 'visible' : 'hidden',
                position: 'absolute',
                top: '39px',
                bottom: 0,
                right: 0,
                left: 0
            },
            popupInfo: {
                position: 'absolute',
                top: '5px',
                right: '27px',
                backgroundColor: '#F5F9F9',
                border: '1px solid #34495E',
                borderRadius: '16px 0px 16px 16px',
                // padding: '8px 20px',
                padding: '24px 32px 10px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            profileImage: {
                flex: 3,
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                border: '1px solid #CCC7C7',
                overflow: 'hidden'
            },
            username: {
                flex: 7,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '10px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'gray',
                letterSpacing: '1px',
            },
            button: {
                marginTop: 16,
                borderTop: '1px solid #CCC7C7',
                width: '100%',
                textAlign: 'center',
                color: 'gray',
                padding: '8px 0 0 0',

            },
            link: {

                textDecoration: 'none',
                color: '#5E6161',
            }

        }
        return (

            <div style={style.container}>
                <div style={{ fontSize: '18px', paddingLeft: '10px', color: 'rgba(0,0,0,0.7)' }}><p>DASH BOARD</p></div>
                <div style={style.profile} onClick={this.togglePopup.bind(this)}>
                    <i className="fa fa-bars" style={{ color: 'rgba(0,0,0,0.7)', fontSize: '16px', paddingRight: '10px', cursor: 'pointer' }}></i>
                </div>
                <div style={style.popupContainer}>
                    <div style={style.popupInfo}>
                        <div style={style.profileImage}>
                            <img src={this.userData === undefined ? '' : this.userData.Paa} alt='Not found' height='100px' width='100px' />
                        </div>
                        <div style={style.username}>
                            <p>{this.userData === undefined ? '' : this.userData.ig} </p>
                        </div>
                        <div style={style.button}>
                            <a href="#root" style={style.link} onClick={this.props.onClick}>Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    togglePopup() {

        if (this.state.toggle) {

            this.setState({

                toggle: false,
            })
        } else {

            this.setState({

                toggle: true,
            })
        }
    }
}