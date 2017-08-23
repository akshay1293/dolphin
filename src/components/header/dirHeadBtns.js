import React from 'react';

class DirHeadBtns extends React.Component {
    render() {
        return (
            <div style={dolphin.container}>
                <span style={dolphin.btn}><i style={{border: '1px solid #3333ff', borderRadius: '4px', padding: '6px'}} className="fa fa-share-alt" aria-hidden="true"></i></span>
                <span style={dolphin.btn}><i style={{border: '1px solid #00cc00', borderRadius: '4px', padding: '6px'}} className="fa fa-download" aria-hidden="true"></i></span>
                <span style={dolphin.btn}><i style={{border: '1px solid #cccc00', borderRadius: '4px', padding: '6px'}} className="fa fa-pencil" aria-hidden="true"></i></span>
                <span style={dolphin.btn}><i style={{border: '1px solid #ff3333', borderRadius: '4px', padding: '6px'}} className="fa fa-trash" aria-hidden="true"></i></span>
            </div>
        );
    }
}

const dolphin = {
    container: {
        display: 'flex'
    },
    btn: {
        color: 'rgba(0, 0, 0, 0.7)',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '0 12px'
    }
}

export default DirHeadBtns;