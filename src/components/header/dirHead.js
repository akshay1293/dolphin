import React from 'react';
import DirHeadBtns from './dirHeadBtns';
import DirHeadLocate from './dirHeadLocate';

class DirHead extends React.Component {
    constructor() {
        super();
        this.state = {
            folderName: 'java'
        }
    }
    render() {
        return (
            <div style={dolphin.container}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span style={dolphin.foldername}>{this.state.folderName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <span>
                        <DirHeadLocate location='/jaghit/study material/java' />
                    </span>
                    <span>
                        <DirHeadBtns />
                    </span>
                </div>
            </div>
        );
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
    }
}

export default DirHead;