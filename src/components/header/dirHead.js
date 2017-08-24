import React from 'react';
import DirHeadBtns from './dirHeadBtns';
import DirHeadLocate from './dirHeadLocate';

class DirHead extends React.Component {
    constructor() {
        super();
        this.state = {
            folderName: 'Documents',
            toggle: 'fa fa-toggle-off',
            tab: 'Private',
        }
    }
    render() {
        return (
            <div style={dolphin.container}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={dolphin.foldername}><i className="fa fa-folder-open-o" aria-hidden="true" style={{paddingRight: '10px'}}></i>{this.state.folderName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span  style={{ display: 'flex', flexDirection: 'row'}}>
                        <span style={dolphin.tab} onClick={this.toggleTab.bind(this)}><i className={this.state.toggle} aria-hidden="true" style={{paddingRight: '8px'}}></i>{this.state.tab}</span>
                        <DirHeadLocate location='/Documents' />
                    </span>
                    <span>
                        <DirHeadBtns />
                    </span>
                </div>
            </div>
        );
    }
    toggleTab() {
        if (this.state.tab === 'Private') {
            this.setState({
                toggle: 'fa fa-toggle-on',
                tab: 'Shared'
            });
        } else {
            this.setState({
                toggle: 'fa fa-toggle-off',
                tab: 'Private'
            });
        }
    }
}

const dolphin = {
    container: {
        backgroundColor: '#FFF',
        boxShadow: '0 6px 16px #CCC',
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
        padding: '6px'
    }
}

export default DirHead;