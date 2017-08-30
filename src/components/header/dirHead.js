import React from 'react';
import DirHeadBtns from './dirHeadBtns';
import DirHeadLocate from './dirHeadLocate';
import Cookie from 'universal-cookie';

class DirHead extends React.Component {
    constructor() {
        super();
        this.cookie = new Cookie();
        let oldPath = this.cookie.get('path');
        // console.log(oldPath);
        let splitPath = oldPath.split('/');
        // console.log(splitPath);
        let name = (splitPath.length <= 2) ? 'Home' : splitPath[splitPath.length - 1];
        if (name.length > 40) {
            name = name.substring(0, 38) + '...';
        }

        this.state = {
            folderName: name,
            toggle: 'fa fa-toggle-off',
            tab: 'Private',
        };
    }


    render() {
        return (
            <div style={dolphin.container}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={dolphin.foldername}><i className="fa fa-folder-open-o" aria-hidden="true" style={{ paddingRight: '10px' }}></i>{this.state.folderName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'row' }}>
                        <span style={dolphin.tab} title='click to switch' onClick={this.toggleTab.bind(this)}><i id="toggleBtn" className={this.state.toggle} aria-hidden="true" style={{ paddingRight: '8px' }}></i>{this.state.tab}</span>
                        <DirHeadLocate location={this.cookie.get('path')} />
                    </span>
                    <span style={{ display: this.props.clicked === true ? 'flex' : 'none' }}>
                        <DirHeadBtns />
                    </span>
                </div>
            </div>
        );
    }
    toggleTab() {
        let toggleBtn = document.getElementById('toggleBtn');
        if (this.state.tab === 'Private') {
            this.setState({
                toggle: 'fa fa-toggle-on',
                tab: 'Shared'
            });
            toggleBtn.style.color = '#7AD5C9';
        } else {
            this.setState({
                toggle: 'fa fa-toggle-off',
                tab: 'Private'
            });
            toggleBtn.style.color = 'black';
        }
    }
}

const dolphin = {
    container: {
        backgroundColor: '#FFF',
        boxShadow: '0 4px 12px #CCC',
        display: 'flex',
        flex: 2,
        flexDirection: 'column'
    },
    foldername: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: '28px',
        fontWeight: 'bold',
        padding: '12px'
    },
    tab: {
        border: '1px solid #FFF',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: '8px',
        padding: '6px',
        width: '82px'
    }
}

export default DirHead;