import React from 'react';

class DirHeadLocate extends React.Component {
    render() {
        let returnThis = [];
        let location = this.props.location;
        let eachLocation = location.split('/');
        for (let i = 1; i < eachLocation.length; i++) {
            returnThis.push(
                <span style={{ display: 'flex' }}>
                    <span style={dolphin.outter}>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    <span style={dolphin.inner}>{eachLocation[i]}</span>
                </span>
            );
        }

        return (
            <div style={dolphin.container}>
                {returnThis}
            </div>
        );
    }
}

const dolphin = {
    container: {
        color: '#333',
        display: 'flex'
    },
    outter: {
        display: 'flex',
        padding: '6px 12px'
    },
    inner: {
        border: '1px solid #777',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '16px',
        padding: '6px 12px'
    }
};

export default DirHeadLocate;