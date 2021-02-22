import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Badge from '../badge';

export default class GistCard extends PureComponent {
    render() {
        const {gistData} = this.props;
        const noOfFiles = Object.keys(gistData.files).length;
        const arr = [];
        for(let file in gistData.files) {
            let language = gistData.files[file].language;
            //remove duplicate file types
            if(arr.indexOf(language) === -1) {
                arr.push(language);
            }
        }
        return (
                <div className="card">
                    <p className="lead">{(gistData.description) || 'No Description'}</p>
                    <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                    <Badge files={arr}/>
                </div>
        );
    }
}

GistCard.propTypes = {
    gistData: PropTypes.object.isRequired
}

