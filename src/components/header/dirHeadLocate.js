import React from 'react';
import Cookie from 'universal-cookie';

class DirHeadLocate extends React.Component {
    constructor() {
        super();
        this.cookie = new Cookie();
    }

    render() {
        let returnThis = [];
        let location = this.props.location;
        // console.log(location.length);
        // console.log(('%2Fakshay.aggarwal%2Fjaghit%2Ftmp%2Ftmp%2Fabcdshxiodhjxewrt%2Fgsiuwhdjfewufpj%3Bfjefhpejd%2Fbhjhhjikohjj%2Fvufgiugkgdedgddjqd').length)
        let eachLocation = location.split('/');

        while (eachLocation.length > 5) {
            // eachLocation[3].pop();
            for (let i = 3; i < eachLocation.length - 1; i++) {
                eachLocation[i] = eachLocation[i + 1];
            }
            eachLocation.pop();
        }

        for (let i = 1; i < eachLocation.length; i++) {
            let shortName = '';
            if (eachLocation[i].length > 15) {
                shortName = eachLocation[i].substring(0, 13) + '...';
            } else {
                shortName = eachLocation[i];
            }
            returnThis.push(
                <span key={i.toString()} style={{ display: 'flex' }}>
                    <span style={dolphin.outter}>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    <span style={dolphin.inner} onClick={this.navigateTo.bind(this, eachLocation[i])}>{shortName}</span>
                </span>
            );
        }

        return (
            <div style={dolphin.container}>
                {returnThis}
            </div>
        );
    }

    navigateTo(folderName) {
        // console.log(folderName);
        let oldPath = this.cookie.get('path');
        // console.log(oldPath);
        let splitPath = oldPath.split('/' + folderName);
        // console.log(splitPath);
        let newPath = splitPath[0] + '/' + folderName;
        // console.log(newPath);
        this.cookie.set('path', newPath);
        window.location.reload();
    }
}

const dolphin = {
    container: {
        color: '#333',
        display: 'flex'
    },
    outter: {
        display: 'flex',
        padding: '6px 8px'
    },
    inner: {
        border: '1px solid #777',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '16px',
        padding: '6px'
    }
};

export default DirHeadLocate;